const { EC2Client, DescribeSnapshotsCommand, DescribeVolumesCommand, DeleteSnapshotCommand } = require("@aws-sdk/client-ec2");


const deleteHandler = async (client, snapshotId) => {
    try {
        const command = new DeleteSnapshotCommand({ SnapshotId: snapshotId });
        await client.send(command);
    }
    catch(err) {
        console.log(err.message);
    }
}

const volumelist = async (client, snapshotId) => {
    try {
        const command = new DescribeVolumesCommand({ SnapshotId: snapshotId })
        const res = await client.send(command);
        const { Volumes } = res;
        if (Volumes && Volumes.length > 0) {
            console.log(`Snapshot ${snapshotId} is attached to volume(s):`);
            for (const volume of Volumes) {
                console.log(`- Volume ID: ${volume.VolumeId}`);
            }
        }
        else {
            await deleteHandler(client, snapshotId);
        }

    }
    catch (err) {
        console.log(err.message)
    }

}

const deleteUnattachedSnapshots = async (client) => {
    try{
        const command = new DescribeSnapshotsCommand({});
        const res = await client.send(command);
        
        const { Snapshots } = res;
        Snapshots.forEach((snapshot) => {
            volumelist(client, snapshot.SnapshotId);
        })
    }
    catch(err){
        console.log(err.message);
    }
}

exports.handler = async function(event, context){
    try {
        const ec2Client = new EC2Client({ region: "us-east-1" })
        await deleteUnattachedSnapshots(ec2Client);
        console.log("Unattached snapshots successfully deleted");
    }
    catch (err) {
        console.log(err.message);
    }
}