# DotNetCoreArchitecture

This project is a cross-platform architecture with new technologies and best practices.

The goal is to share knowledge with the technical community and use it in new projects.

:star: Thanks for enjoying! :star:

## Code Analysis

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3d1ea5b1f4b745488384c744cb00d51e)](https://www.codacy.com/app/rafaelfgx/DotNetCoreArchitecture?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=rafaelfgx/DotNetCoreArchitecture&amp;utm_campaign=Badge_Grade)

## Technologies

* [.NET Core 2.2](https://dotnet.microsoft.com/download)
* [ASP.NET Core 2.2](https://docs.microsoft.com/en-us/aspnet/core)
* [Entity Framework Core 2.2](https://docs.microsoft.com/en-us/ef/core)
* [C# 7.3](https://docs.microsoft.com/en-us/dotnet/csharp)
* [Angular 7.2](https://angular.io/docs)
* [Typescript 3.2](https://www.typescriptlang.org/docs/home.html)
* [HTML](https://www.w3schools.com/html)
* [CSS](https://www.w3schools.com/css)
* [SASS](https://sass-lang.com)
* [UIkit](https://getuikit.com/docs/introduction)
* [JWT](https://jwt.io)
* [Swagger](https://swagger.io)
* [FluentValidation](https://fluentvalidation.net)
* [Scrutor](https://github.com/khellang/Scrutor)
* [Serilog](https://serilog.net)
* [Docker](https://docs.docker.com)

## Practices

* Clean Code
* SOLID Principles
* DDD (Domain-Driven Design)
* Code Analysis
* Inversion of Control
* Unit of Work Pattern
* Repository Pattern
* Database Migrations
* Authentication
* Auhorization
* Performance
* Logging

## Roadmap

* Angular 8
* .NET Core 3.0
* ASP.NET Core 3.0
* Entity Framework Core 3.0
* C# 8

## Run

<details>
<summary>Command Line</summary>

1. Install latest [.NET Core SDK](https://aka.ms/dotnet-download).

2. Open directory **source\Web\Frontend** in command line and execute **npm run restore**.

3. Open directory **source\Web** in command line and execute **dotnet run**.

4. Open <https://localhost:8090>.

</details>

<details>
<summary>Visual Studio Code</summary>

1. Install latest [.NET Core SDK](https://aka.ms/dotnet-download).

2. Install [C# Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp).

3. Open directory **source\Web\Frontend** in command line and execute **npm run restore**.

4. Open **source** directory in Visual Studio Code.

5. Press **F5**.

</details>

<details>
<summary>Visual Studio</summary>

1. Install latest [.NET Core SDK](https://aka.ms/dotnet-download).

2. Open directory **source\Web\Frontend** in command line and execute **npm run restore**.

3. Open **source\DotNetCoreArchitecture.sln** in Visual Studio.

4. Set **DotNetCoreArchitecture.Web** as startup project.

5. Press **F5**.

</details>

<details>
<summary>Docker</summary>

1. Install [Docker](https://www.docker.com/get-started).

2. Execute **docker-compose up --build -d --force-recreate** in root directory.

3. Open <http://localhost:8095>.

</details>

## Utils

<details>
<summary>Books</summary>

* **Clean Code: A Handbook of Agile Software Craftsmanship** - Robert C. Martin (Uncle Bob)
* **Clean Architecture: A Craftsman's Guide to Software Structure and Design** - Robert C. Martin (Uncle Bob)
* **Domain-Driven Design: Tackling Complexity in the Heart of Software** - Eric Evans
* **Domain-Driven Design Reference: Definitions and Pattern Summaries** - Eric Evans
* **Implementing Domain-Driven Design** - Vaughn Vernon
* **Domain-Driven Design Distilled** - Vaughn Vernon

</details>

<details>
<summary>Tools</summary>

* [Visual Studio](https://visualstudio.microsoft.com)
* [Visual Studio Code](https://code.visualstudio.com)
* [SQL Server](https://www.microsoft.com/sql-server)
* [Postman](https://www.getpostman.com)
* [Codacy](https://codacy.com)
* [StackBlitz](https://stackblitz.com)

</details>

<details>
<summary>Visual Studio Extensions</summary>

* [CodeMaid](https://marketplace.visualstudio.com/items?itemName=SteveCadwallader.CodeMaid)
* [ReSharper](https://www.jetbrains.com/resharper)

</details>

<details>
<summary>VS Code Extensions</summary>

* [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
* [Angular v7 Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
* [Atom One Dark Theme](https://marketplace.visualstudio.com/items?itemName=akamud.vscode-theme-onedark)
* [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
* [C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
* [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
* [Sort lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)
* [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
* [Visual Studio Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vs-keybindings)
* [vscode-angular-html](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html)

</details>

## Nuget Packages

Packages were created to make this architecture clean of common features for any solution.

**Source:** [https://github.com/rafaelfgx/DotNetCore](https://github.com/rafaelfgx/DotNetCore)

**Published:** [https://www.nuget.org/profiles/rafaelfgx](https://www.nuget.org/profiles/rafaelfgx)

## Layers

**Web:** It contains the API (ASP.NET Core) and the Frontend (Angular).

**Application:** It is responsible for flow control.

**Domain:** It contains business rules and domain logic.

**Model:** It contains objects such as enums and models.

**Database:** It isolates and abstracts data persistence.

**CrossCutting:** It provides generic features.

## Web

### ASP.NET Core

#### Swagger

Open the documentation generated by Swagger:

<https://localhost:8090/swagger>

#### Postman

Import "postman.json" file into Postman.

#### Startup

The **Startup** class is responsible for configuring the API.

```csharp
public class Startup
{
    public Startup(IHostingEnvironment environment)
    {
        Configuration = environment.Configuration();
        Environment = environment;
    }

    private IConfiguration Configuration { get; }

    private IHostingEnvironment Environment { get; }

    public void Configure(IApplicationBuilder application)
    {
        application.UseExceptionMiddleware(Environment);
        application.UseCorsAllowAny();
        application.UseHttps();
        application.UseAuthentication();
        application.UseResponseCompression();
        application.UseResponseCaching();
        application.UseStaticFiles();
        application.UseMvcWithDefaultRoute();
        application.UseHealthChecks();
        application.UseSwaggerDefault();
        application.UseSpa(Environment);
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddLogger(Configuration);
        services.AddCors();
        services.AddJsonWebToken();
        services.AddHash();
        services.AddAuthenticationJwtBearer();
        services.AddResponseCompression();
        services.AddResponseCaching();
        services.AddMvcDefault();
        services.AddHealthChecks();
        services.AddSwaggerDefault();
        services.AddSpa();
        services.AddFileService();
        services.AddApplicationServices();
        services.AddDomainServices();
        services.AddDatabaseServices();
        services.AddDatabaseContext(Configuration);
    }
}
```

#### Extensions

The **Extensions** class is responsible for adding and configuring services for dependency injection.

```csharp
public static class Extensions
{
    public static void AddApplicationServices(this IServiceCollection services)
    {
        services.AddMatchingInterface(typeof(IUserApplicationService).Assembly);
    }

    public static void AddDatabaseContext(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString(nameof(DatabaseContext));

        services.AddDbContextMigrate<DatabaseContext>(options => options.ConfigureWarningsAsErrors().UseSqlServer(connectionString));
    }

    public static void AddDatabaseServices(this IServiceCollection services)
    {
        services.AddMatchingInterface(typeof(IDatabaseUnitOfWork).Assembly);
    }

    public static void AddDomainServices(this IServiceCollection services)
    {
        services.AddMatchingInterface(typeof(IUserDomainService).Assembly);
    }

    public static void AddJsonWebToken(this IServiceCollection services)
    {
        services.AddJsonWebToken(Guid.NewGuid().ToString(), TimeSpan.FromHours(12));
    }

    public static void AddSpa(this IServiceCollection services)
    {
        services.AddSpaStaticFiles("Frontend/dist");
    }

    public static void UseHealthChecks(this IApplicationBuilder application)
    {
        application.UseHealthChecks("/health");
    }

    public static void UseSpa(this IApplicationBuilder application, IHostingEnvironment environment)
    {
        application.UseSpaAngularServer(environment, "Frontend", "serve");
    }
}
```

#### Controller

The **Controller** class is responsible for receiving, processing, and responding requests.

It must be as simple and small as possible, without any rule or logic.

```csharp
[ApiController]
[RouteController]
public class UsersController : BaseController
{
    public UsersController(IUserApplicationService userApplicationService)
    {
        UserApplicationService = userApplicationService;
    }

    private IUserApplicationService UserApplicationService { get; }

    [HttpPost]
    public async Task<IActionResult> AddAsync(AddUserModel addUserModel)
    {
        return Result(await UserApplicationService.AddAsync(addUserModel));
    }

    [AuthorizeEnum(Roles.Admin)]
    [HttpDelete("{userId}")]
    public async Task<IActionResult> DeleteAsync(long userId)
    {
        return Result(await UserApplicationService.DeleteAsync(userId));
    }

    [HttpGet("Grid")]
    public async Task<PagedList<UserModel>> GridAsync([FromQuery]PagedListParameters parameters)
    {
        return await UserApplicationService.ListAsync(parameters);
    }

    [HttpPatch("{userId}/Inactivate")]
    public async Task InactivateAsync(long userId)
    {
        await UserApplicationService.InactivateAsync(userId);
    }

    [HttpGet]
    public async Task<IEnumerable<UserModel>> ListAsync()
    {
        return await UserApplicationService.ListAsync();
    }

    [HttpGet("{userId}")]
    public async Task<UserModel> SelectAsync(long userId)
    {
        return await UserApplicationService.SelectAsync(userId);
    }

    [AllowAnonymous]
    [HttpPost("SignIn")]
    public async Task<IActionResult> SignInAsync(SignInModel signInModel)
    {
        return Result(await UserApplicationService.SignInAsync(signInModel));
    }

    [HttpPost("SignOut")]
    public Task SignOutAsync()
    {
        return UserApplicationService.SignOutAsync(new SignOutModel(SignedInModel.UserId));
    }

    [HttpPut("{userId}")]
    public async Task<IActionResult> UpdateAsync(UpdateUserModel updateUserModel)
    {
        return Result(await UserApplicationService.UpdateAsync(updateUserModel));
    }
}
```

### Angular

#### Component

The **Component** class is responsible for being a small part of the application.

```typescript
@Component({ selector: "app-login", templateUrl: "./login.component.html" })
export class AppLoginComponent {
    signInModel = new SignInModel();

    constructor(private readonly appAuthenticationService: AppAuthenticationService) { }

    ngSubmit() {
        this.appAuthenticationService.signIn(this.signInModel);
    }
}
```

#### Model

The **Model** class is responsible for containing a set of data.

```typescript
export class SignInModel {
    login: string | undefined;
    password: string | undefined;
}
```

#### Service

The **Service** class is responsible for accessing the API or containing logic that does not belong to component.

```typescript
@Injectable({ providedIn: "root" })
export class AppUserService {
    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly appTokenService: AppTokenService) { }

    add(addUserModel: AddUserModel) {
        return this.http.post<number>(`Users`, addUserModel);
    }

    delete(userId: number) {
        return this.http.delete(`Users/${userId}`);
    }

    list() {
        return this.http.get<UserModel[]>(`Users`);
    }

    select(userId: number) {
        return this.http.get<UserModel>(`Users/${userId}`);
    }

    signIn(signInModel: SignInModel): void {
        this.http
            .post<TokenModel>(`Users/SignIn`, signInModel)
            .subscribe((tokenModel) => {
                if (tokenModel && tokenModel.token) {
                    this.appTokenService.set(tokenModel.token);
                    this.router.navigate(["/main/home"]);
                }
            });
    }

    signOut() {
        if (this.appTokenService.any()) {
            this.http.post(`Users/SignOut`, {}).subscribe();
        }

        this.appTokenService.clear();
        this.router.navigate(["/login"]);
    }

    update(updateUserModel: UpdateUserModel) {
        return this.http.put(`Users/${updateUserModel.userId}`, updateUserModel);
    }
}
```

#### Guard

The **Guard** class is responsible for route security.

```typescript
@Injectable()
export class AppGuard implements CanActivate {
    constructor(
        private readonly router: Router,
        private readonly appTokenService: AppTokenService) { }

    canActivate() {
        if (this.appTokenService.any()) { return true; }
        this.router.navigate(["/login"]);
        return false;
    }
}
```

#### Error Handler

The **ErrorHandler** class is responsible for centralizing the management of all errors and exceptions.

```typescript
@Injectable()
export class AppErrorHandler implements ErrorHandler {
    constructor(private readonly injector: Injector) { }

    handleError(error: any) {
        if (error instanceof HttpErrorResponse) {
            switch (error.status) {
                case 401: {
                    const router = this.injector.get<Router>(Router);
                    router.navigate(["/login"]);
                    return;
                }
                case 422: {
                    const appModalService = this.injector.get<AppModalService>(AppModalService);
                    appModalService.alert(error.error);
                    return;
                }
            }
        }

        console.error(error);
    }
}
```

#### HTTP Interceptor

The **HttpInterceptor** class is responsible for intercepting request and response to do some logic, such as adding JWT to header in every request.

```typescript
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(private readonly appTokenService: AppTokenService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${this.appTokenService.get()}` }
        });

        return next.handle(request);
    }
}
```

## Application

#### Application Service

The **ApplicationService** class is responsible for flow control. It uses validator, factory, domain, repository and unit of work, but it does not contain business rules or domain logic.

```csharp
public sealed class UserApplicationService : BaseApplicationService, IUserApplicationService
{
    public UserApplicationService
    (
        IDatabaseUnitOfWork databaseUnitOfWork,
        IUserDomainService userDomainService,
        IUserLogApplicationService userLogApplicationService,
        IUserRepository userRepository
    )
    {
        DatabaseUnitOfWork = databaseUnitOfWork;
        UserDomainService = userDomainService;
        UserLogApplicationService = userLogApplicationService;
        UserRepository = userRepository;
    }

    private IDatabaseUnitOfWork DatabaseUnitOfWork { get; }

    private IUserDomainService UserDomainService { get; }

    private IUserLogApplicationService UserLogApplicationService { get; }

    private IUserRepository UserRepository { get; }

    public async Task<IDataResult<long>> AddAsync(AddUserModel addUserModel)
    {
        var validation = new AddUserModelValidator().Valid(addUserModel);

        if (!validation.Success)
        {
            return ErrorDataResult<long>(validation.Message);
        }

        UserDomainService.GenerateHash(addUserModel.SignIn);

        var userEntity = UserEntityFactory.Create(addUserModel);

        userEntity.Add();

        await UserRepository.AddAsync(userEntity);

        await DatabaseUnitOfWork.SaveChangesAsync();

        return SuccessDataResult(userEntity.UserId);
    }

    public async Task<IResult> DeleteAsync(long userId)
    {
        await UserRepository.DeleteAsync(userId);

        await DatabaseUnitOfWork.SaveChangesAsync();

        return SuccessResult();
    }

    public async Task InactivateAsync(long userId)
    {
        var userEntity = UserEntityFactory.Create(userId);

        userEntity.Inactivate();

        await UserRepository.UpdatePartialAsync(userEntity.UserId, new { userEntity.Status });

        await DatabaseUnitOfWork.SaveChangesAsync();
    }

    public async Task<PagedList<UserModel>> ListAsync(PagedListParameters parameters)
    {
        return await UserRepository.ListAsync<UserModel>(parameters);
    }

    public async Task<IEnumerable<UserModel>> ListAsync()
    {
        return await UserRepository.ListAsync<UserModel>();
    }

    public async Task<UserModel> SelectAsync(long userId)
    {
        return await UserRepository.SelectAsync<UserModel>(userId);
    }

    public async Task<IDataResult<TokenModel>> SignInAsync(SignInModel signInModel)
    {
        var validation = new SignInModelValidator().Valid(signInModel);

        if (!validation.Success)
        {
            return ErrorDataResult<TokenModel>(validation.Message);
        }

        UserDomainService.GenerateHash(signInModel);

        var signedInModel = await UserRepository.SignInAsync(signInModel);

        validation = new SignedInModelValidator().Valid(signedInModel);

        if (!validation.Success)
        {
            return ErrorDataResult<TokenModel>(validation.Message);
        }

        var addUserLogModel = new AddUserLogModel(signedInModel.UserId, LogType.SignIn);

        await UserLogApplicationService.AddAsync(addUserLogModel);

        var tokenModel = UserDomainService.GenerateToken(signedInModel);

        return SuccessDataResult(tokenModel);
    }

    public async Task SignOutAsync(SignOutModel signOutModel)
    {
        var addUserLogModel = new AddUserLogModel(signOutModel.UserId, LogType.SignOut);

        await UserLogApplicationService.AddAsync(addUserLogModel);
    }

    public async Task<IResult> UpdateAsync(UpdateUserModel updateUserModel)
    {
        var validation = new UpdateUserModelValidator().Valid(updateUserModel);

        if (!validation.Success)
        {
            return ErrorResult(validation.Message);
        }

        var userEntity = await UserRepository.SelectAsync(updateUserModel.UserId);

        if (userEntity == default)
        {
            return SuccessResult();
        }

        userEntity.ChangeEmail(updateUserModel.Email);

        userEntity.ChangeFullName(updateUserModel.FullName.Name, updateUserModel.FullName.Surname);

        await UserRepository.UpdateAsync(userEntity.UserId, userEntity);

        await DatabaseUnitOfWork.SaveChangesAsync();

        return SuccessResult();
    }
}
```

## Domain

#### Entity

The **Entity** class is responsible for business rules and domain logic.

The class must have an identity.

The property values must be assigned in the constructor and only be changed by methods.

The names of methods and properties must be the same as the business domain.

```csharp
public class UserEntity
{
    public UserEntity
    (
        long userId,
        FullName fullName,
        Email email,
        SignIn signIn,
        Roles roles,
        Status status
    )
    {
        UserId = userId;
        FullName = fullName;
        Email = email;
        SignIn = signIn;
        Roles = roles;
        Status = status;
    }

    public long UserId { get; private set; }

    public FullName FullName { get; private set; }

    public Email Email { get; private set; }

    public SignIn SignIn { get; private set; }

    public Roles Roles { get; private set; }

    public Status Status { get; private set; }

    public ICollection<UserLogEntity> UsersLogs { get; private set; }

    public void Add()
    {
        UserId = default;
        Roles = Roles.User;
        Status = Status.Active;
    }

    public void ChangeEmail(string address)
    {
        Email = new Email(address);
    }

    public void ChangeFullName(string name, string surname)
    {
        FullName = new FullName(name, surname);
    }

    public void Inactivate()
    {
        Status = Status.Inactive;
    }
}
```

#### Value Object

The **ValueObject** class is responsible for grouping data that adds value to entity.

The class must have no identity.

The property values must be assigned in the constructor and be immutable.

```csharp
public sealed class SignIn
{
    public SignIn(string login, string password)
    {
        Login = login;
        Password = password;
    }

    public string Login { get; private set; }

    public string Password { get; private set; }
}
```

#### Entity Factory

The **EntityFactory** class is responsible for creating the entity.

```csharp
public static class UserEntityFactory
{
    public static UserEntity Create(long userId)
    {
        return new UserEntity(userId, default, default, default, default, default);
    }

    public static UserEntity Create(AddUserModel addUserModel)
    {
        return new UserEntity
        (
            addUserModel.UserId,
            new FullName(addUserModel.FullName.Name, addUserModel.FullName.Surname),
            new Email(addUserModel.Email),
            new SignIn(addUserModel.SignIn.Login, addUserModel.SignIn.Password),
            addUserModel.Roles,
            default
        );
    }
}
```

#### Domain Service

The **DomainService** class is responsible for encapsulating domain logic that does not fit within the entity.

```csharp
public class UserDomainService : IUserDomainService
{
    public UserDomainService
    (
        IHash hash,
        IJsonWebToken jsonWebToken
    )
    {
        Hash = hash;
        JsonWebToken = jsonWebToken;
    }

    private IHash Hash { get; }

    private IJsonWebToken JsonWebToken { get; }

    public void GenerateHash(SignInModel signInModel)
    {
        signInModel.Password = Hash.Create(signInModel.Password);
    }

    public TokenModel GenerateToken(SignedInModel signedInModel)
    {
        var claims = new List<Claim>();

        claims.AddSub(signedInModel.UserId.ToString());

        claims.AddRoles(signedInModel.Roles.ToString().Split(", "));

        var token = JsonWebToken.Encode(claims);

        return new TokenModel(token);
    }
}
```

## Model

#### Model

The **Model** class is responsible for containing a set of data.

```csharp
public class SignInModel
{
    public string Login { get; set; }

    public string Password { get; set; }
}
```

#### Model Validator

The **ModelValidator** class is responsible for validating the model with defined rules.

```csharp
public sealed class SignInModelValidator : Validator<SignInModel>
{
    public SignInModelValidator()
    {
        WithMessage(Texts.LoginPasswordInvalid);
        RuleFor(x => x.Login).NotEmpty();
        RuleFor(x => x.Password).NotEmpty();
    }
}
```

#### Enum

The **Enum** is responsible for being a set of named integer constants.

```csharp
public enum Status
{
    None = 0,
    Active = 1,
    Inactive = 2
}
```

## Database

#### Context

The **Context** class is responsible for configuring and mapping the database.

```csharp
public sealed class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly();
        modelBuilder.Seed();
    }
}
```

#### Context Factory

The **ContextFactory** class is responsible for generating database migrations.

```csharp
public sealed class DatabaseContextFactory : IDesignTimeDbContextFactory<DatabaseContext>
{
    public DatabaseContext CreateDbContext(string[] args)
    {
        const string connectionString = "Server=(localdb)\\MSSQLLocalDB;Database=Database;Integrated Security=true;Connection Timeout=5;";

        var builder = new DbContextOptionsBuilder<DatabaseContext>();

        builder.UseSqlServer(connectionString);

        return new DatabaseContext(builder.Options);
    }
}
```

#### Context Seed

The **ContextSeed** class is responsible for seeding initial data.

```csharp
public static class DatabaseContextSeed
{
    public static void Seed(this ModelBuilder modelBuilder)
    {
        modelBuilder.SeedUsers();
    }

    private static void SeedUsers(this ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UserEntity>(x =>
        {
            x.HasData(new
            {
                UserId = 1L,
                Roles = Roles.User | Roles.Admin,
                Status = Status.Active
            });

            x.OwnsOne(y => y.FullName).HasData(new
            {
                UserEntityUserId = 1L,
                Name = "Administrator",
                Surname = "Administrator"
            });

            x.OwnsOne(y => y.Email).HasData(new
            {
                UserEntityUserId = 1L,
                Address = "administrator@administrator.com"
            });
        });
    }
}
```

#### Unit of Work

The **UnitOfWork** class is responsible for managing transactions.

```csharp
public sealed class DatabaseUnitOfWork : IDatabaseUnitOfWork
{
    public DatabaseUnitOfWork(DatabaseContext context)
    {
        Context = context;
    }

    private DatabaseContext Context { get; }

    public Task<int> SaveChangesAsync()
    {
        return Context.SaveChangesAsync();
    }
}
```

#### Entity Configuration

The **EntityConfiguration** class is responsible for configuring and mapping the entity to table.

```csharp
public sealed class UserEntityConfiguration : IEntityTypeConfiguration<UserEntity>
{
    public void Configure(EntityTypeBuilder<UserEntity> builder)
    {
        builder.ToTable("Users", "User");

        builder.HasKey(x => x.UserId);

        builder.Property(x => x.UserId).IsRequired().ValueGeneratedOnAdd();
        builder.Property(x => x.Roles).IsRequired();
        builder.Property(x => x.Status).IsRequired();

        builder.OwnsOne(x => x.FullName, y =>
        {
            y.Property(x => x.Name).HasColumnName(nameof(UserEntity.FullName.Name)).IsRequired().HasMaxLength(100);
            y.Property(x => x.Surname).HasColumnName(nameof(UserEntity.FullName.Surname)).IsRequired().HasMaxLength(200);
        });

        builder.OwnsOne(x => x.Email, y =>
        {
            y.Property(x => x.Address).HasColumnName(nameof(UserEntity.Email)).IsRequired().HasMaxLength(300);
            y.HasIndex(x => x.Address).IsUnique();
        });

        builder.OwnsOne(x => x.SignIn, y =>
        {
            y.Property(x => x.Login).HasColumnName(nameof(UserEntity.SignIn.Login)).IsRequired().HasMaxLength(100);
            y.Property(x => x.Password).HasColumnName(nameof(UserEntity.SignIn.Password)).IsRequired().HasMaxLength(500);
            y.HasIndex(x => x.Login).IsUnique();
        });

        builder.HasMany(x => x.UsersLogs).WithOne(x => x.User).HasForeignKey(x => x.UserId);
    }
}
```

#### Repository

The **Repository** class is responsible for abstracting and isolating data persistence.

```csharp
public sealed class UserRepository : EntityFrameworkCoreRelationalRepository<UserEntity>, IUserRepository
{
    public UserRepository(DatabaseContext context) : base(context) { }

    public Task<SignedInModel> SignInAsync(SignInModel signInModel)
    {
        return SingleOrDefaultAsync<SignedInModel>
        (
            userEntity =>
            userEntity.SignIn.Login.Equals(signInModel.Login) &&
            userEntity.SignIn.Password.Equals(signInModel.Password) &&
            userEntity.Status == Status.Active
        );
    }
}
```
