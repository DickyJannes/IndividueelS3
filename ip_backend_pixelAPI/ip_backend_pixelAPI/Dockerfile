FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 5011
EXPOSE 5010

ENV ASPNETCORE_URLS=http://+:5010

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["./ip_backend_pixelAPI/ip_backend_pixelAPI/ip_backend_pixelAPI.csproj", "./"]
RUN dotnet restore "ip_backend_pixelAPI.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "./ip_backend_pixelAPI/ip_backend_pixelAPI/ip_backend_pixelAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "./ip_backend_pixelAPI/ip_backend_pixelAPI/ip_backend_pixelAPI.csproj" -c Release -o /app/publish
RUN dotnet dev-certs https --trust

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ip_backend_pixelAPI.dll"]
