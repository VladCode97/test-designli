# The following is a description of the project

The project is built with Nestjs using npm as package manager for the solution.

Within this project there is a mvc architecture by domain, where each domain corresponds to each problem that was raised.

For example, for the mailParser, it contains this structure

```
├── domain
│   └── enums
│       └── errors.enum.ts
├── mail-parser.module.ts
├── service
│   └── MailParser.service.ts
└── view
    └── MailParser.controller.ts
```

Mapper structure:

```
├── domain
│   ├── model
│   │   ├── ActionModel.ts
│   │   ├── CommonHeadersModel.ts
│   │   ├── MailModel.ts
│   │   ├── ReceiptModel.ts
│   │   ├── RecordModel.ts
│   │   └── VerdictModel.ts
│   └── types
│       └── SESType.ts
├── mapper-structure.module.ts
├── service
│   └── MapperStructure.service.ts
├── shared
│   └── DTO
│       └── sesRecordDTO.ts
├── utils
│   ├── mapperJsonInformation.util.ts
│   └── transformerInformation.util.ts
└── view
    └── MapperStructure.controller.ts
```

In addition to this, this project contains a swagger indicating the tests that were needed to fix it.

http://url(local or production)/

Notes
* It has the latest version of nestJS.
* It also has the latest version of Nodejs ( v21.4.0 )

## Installation guide

1. Have the latest version of npm ( 10.2.4 ).
2. Download the project repository.
3. enter the project and give the command npm run install.
4. then give the command npm run start.