## LegislAqui

### Permissionamento

Os usuários e seus permissionamentos são mantidos pela própria aplicação, a partir do menu de administração.

#### Perfis
- Aprovador
    - Modera as ideias
- Comissao
    - Após atingidos os obtivos de apoios, realiza o trâmite do processo legislativo
- Administrador
    - Todas as permissões
    - Manter usuários
- Cidadão
    - Cria ideias legislativas
    - Apoia
    - Acompanha ideias

### Configurações
#### Atribuir o perfil de administrador a um usuário

```
php artisan legislaqui:make:admin {user_email}
```

#### Opção de curtidas

A opção de curtidas é habilitada por padrão. Para desabilitá-la, altere o .env para
```
LIKES_ENABLED=false
```

### Serviços externos
#### Google Recaptcha v2 Checkbox
O serviço é usado para proteger o registro de usuários.
##### Variáveis do `.env` necessárias
O serviço e chaves são registrados na conta corporativa de equipe
```
RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
```
##### Habilitar/desabilitar recaptcha no ambiente
Por padrão, o recaptcha é habilitado. Para testes automatizados ou em ambientes de desenvolvimento, podemos desabilitar o recaptcha através do `.env`
```
RECAPTCHA_ENABLED=false
``` 

### Documentação

#### Ato 661/2020

https://alerj.sharepoint.com/:i:/s/arquivos/Eczdqc-hF5tDkFkw15K9GpIBOF61GPmxDVeHCn0ekhVxtQ?e=ANhKza

#### Diagrama de Atividades

https://alerj.sharepoint.com/:b:/s/arquivos/EQ0d-Rlpa6BMiHYbKUv5ECEBE_Ke1MrGwddpCrRkeZKcBw?e=7gj6St

#### Diagrama de Casos de Uso

https://alerj.sharepoint.com/:b:/s/arquivos/EQvlyRZoypBHghAV7xAyw6sB5I83bEwUJZ_k7-Fr5DU3vw?e=P6Vwh3

#### Processo Legislativo

https://alerj.sharepoint.com/:b:/s/arquivos/Ea5tOOQwSmJFr8GhiF-DgdoBc1frv4M1yuZ6KCZVbRCFog?e=DXZvxM

