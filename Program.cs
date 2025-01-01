using DeshawnsDotnet.Models;
using DeshawnsDotnet.Models.DTO;

List<Dog> dogs = new List<Dog>
{
    new Dog()
    {
        Id = 1,
        Name = "Cooper",
        City = "Nashville",
        Walker = null
    },
    new Dog()
    {
        Id = 2,
        Name = "Diesel",
        City = "Mt. Juliet",
        Walker = null
    },
    new Dog()
    {
        Id = 3,
        Name = "Buddy",
        City = "Smyrna",
        Walker = null
    },
    new Dog()
    {
        Id = 4,
        Name = "Lucky",
        City = "LaVergne",
        Walker = null
    },
    new Dog()
    {
        Id = 5,
        Name = "Charlie",
        City = "Lebanon",
        Walker = null
    }
};

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/api/dogs", () => 
{
    return dogs.Select(dogs => new DogDTO
    {
        Id = dogs.Id,
        Name = dogs.Name,
        City = dogs.City,
        Walker = dogs.Walker
    });
});


app.Run();
