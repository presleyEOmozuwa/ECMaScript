using System;

var user = new User();
Console.WriteLine("Hello World");

public enum Gender{
    Male, 
    Female, 
    Gay, 
    Lesbian, 
    Transgender,
    Minf
}

public class User{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public Gender Gender { get; set; }
}


