using System;
public class StartUp {
    public static void ConfigureServices (IServiceCollection services) {
        services.AddClass<User>();
    }

    public static void Configure (IApplicationBuilder app) {
        app.UseRoutind ();
        app.UseAuthentication ();
        app.UseAuthorization ();
        app.Use ((context, next) => {
        });
    }

    public void AddClass<T>(T User) 
    {
        var user = new User();
    }
}