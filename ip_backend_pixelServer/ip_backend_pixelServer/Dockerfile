FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 5001
EXPOSE 5000

ENV ASPNETCORE_URLS=http://+:5000

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["./ip_backend_pixelServer/ip_backend_pixelServer/ip_backend_pixelServer.csproj", "./"]
RUN dotnet restore "ip_backend_pixelServer.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "./ip_backend_pixelServer/ip_backend_pixelServer/ip_backend_pixelServer.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "./ip_backend_pixelServer/ip_backend_pixelServer/ip_backend_pixelServer.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ip_backend_pixelServer.dll"]
