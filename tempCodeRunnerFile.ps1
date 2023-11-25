Invoke-WebRequest -UseBasicParsing -Uri "https://dev2-api.lello.com.br/ppc/v1/relatorios/prestacao-contas/demonstrativos/conta-corrente/pdf" `
-Method POST `
-UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/118.0" `
-Headers @{
"Accept" = "application/json, text/plain, */*"
  "Accept-Language" = "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3"
  "Accept-Encoding" = "gzip, deflate, br"
  "origem" = "PPC_V2"
  "Authorization" = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoic3lzIiwiZnJvbSI6IjIwMjMtMTAtMzFUMDk6NTA6MDUuNTM3NDc0IiwidW50aWwiOiIyMDIzLTEwLTMxVDEwOjUwOjA1LjUzNzQ4MyIsInVzZXIiOiJyZXNvbHZhZmFjaWxfcHVibGljIn0.PSuHFviHdBDj-u3IG7ilUlnoxu0Bonze5hZ7V4-llVM"
  "referencia" = "1163"
  "idUsuario" = "335099"
  "codConta" = "0"
  "email" = "marcelo.silva@lello.com.br"
  "Origin" = "https://resolvafacil-dev.lellocondominios.com.br"
  "DNT" = "1"
  "Referer" = "https://resolvafacil-dev.lellocondominios.com.br/"
  "Sec-Fetch-Dest" = "empty"
  "Sec-Fetch-Mode" = "cors"
  "Sec-Fetch-Site" = "cross-site"
} `
-ContentType "application/json;charset=utf-8"