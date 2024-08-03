
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.0
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.8.0",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  clerkId: 'clerkId',
  firstName: 'firstName',
  lastName: 'lastName',
  profileImageUrl: 'profileImageUrl',
  emailAddress: 'emailAddress',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.HttpNetworkErrorDataScalarFieldEnum = {
  id: 'id',
  url: 'url'
};

exports.Prisma.HttpSerializationErrorDataScalarFieldEnum = {
  id: 'id',
  url: 'url'
};

exports.Prisma.HttpClientErrorDataScalarFieldEnum = {
  id: 'id',
  url: 'url',
  status: 'status'
};

exports.Prisma.MissingAttributeErrorDataScalarFieldEnum = {
  id: 'id',
  attribute: 'attribute',
  parentHtml: 'parentHtml'
};

exports.Prisma.InvalidAttributeErrorDataScalarFieldEnum = {
  id: 'id',
  attribute: 'attribute',
  parentHtml: 'parentHtml',
  value: 'value'
};

exports.Prisma.InvalidTextErrorDataScalarFieldEnum = {
  id: 'id',
  parentHtml: 'parentHtml',
  value: 'value'
};

exports.Prisma.MissingTextErrorDataScalarFieldEnum = {
  id: 'id',
  parentHtml: 'parentHtml'
};

exports.Prisma.NonUniqueTextErrorDataScalarFieldEnum = {
  id: 'id',
  parentHtml: 'parentHtml'
};

exports.Prisma.MissingElementErrorDataScalarFieldEnum = {
  id: 'id',
  parentHtml: 'parentHtml',
  selector: 'selector'
};

exports.Prisma.NonUniqueElementErrorDataScalarFieldEnum = {
  id: 'id',
  parentHtml: 'parentHtml',
  selector: 'selector'
};

exports.Prisma.ProductRecordErrorScalarFieldEnum = {
  id: 'id',
  errorId: 'errorId',
  errorCode: 'errorCode',
  recordId: 'recordId',
  field: 'field',
  message: 'message'
};

exports.Prisma.ProductRecordScalarFieldEnum = {
  id: 'id',
  timestamp: 'timestamp',
  createdById: 'createdById',
  updatedById: 'updatedById',
  updatedAt: 'updatedAt',
  productId: 'productId',
  price: 'price',
  rawPrice: 'rawPrice',
  status: 'status',
  wasManuallyCreated: 'wasManuallyCreated',
  manuallyChangedFields: 'manuallyChangedFields'
};

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  createdById: 'createdById',
  updatedAt: 'updatedAt',
  updatedById: 'updatedById',
  name: 'name',
  slug: 'slug',
  code: 'code',
  imageSrc: 'imageSrc',
  status: 'status',
  price: 'price',
  category: 'category',
  subCategories: 'subCategories'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ElementAttribute = exports.$Enums.ElementAttribute = {
  HREF: 'HREF',
  SRC: 'SRC',
  VALUE: 'VALUE',
  DATA_GA_PRODUCT_NAME: 'DATA_GA_PRODUCT_NAME'
};

exports.ScrapingErrorCode = exports.$Enums.ScrapingErrorCode = {
  MISSING_ATTRIBUTE: 'MISSING_ATTRIBUTE',
  INVALID_ATTRIBUTE: 'INVALID_ATTRIBUTE',
  MISSING_TEXT: 'MISSING_TEXT',
  INVALID_TEXT: 'INVALID_TEXT',
  NONUNIQUE_TEXT: 'NONUNIQUE_TEXT',
  MISSING_ELEMENT: 'MISSING_ELEMENT',
  NONUNIQUE_ELEMENT: 'NONUNIQUE_ELEMENT',
  HTTP_NETWORK: 'HTTP_NETWORK',
  HTTP_CLIENT: 'HTTP_CLIENT',
  HTTP_SERIALIZATION: 'HTTP_SERIALIZATION'
};

exports.ProductRecordDataField = exports.$Enums.ProductRecordDataField = {
  PRICE: 'PRICE',
  RAW_PRICE: 'RAW_PRICE',
  STATUS: 'STATUS'
};

exports.ProductStatus = exports.$Enums.ProductStatus = {
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  IN_STOCK: 'IN_STOCK',
  AVAILABLE_FOR_BACKORDER: 'AVAILABLE_FOR_BACKORDER',
  NOT_LISTED: 'NOT_LISTED'
};

exports.ProductCategory = exports.$Enums.ProductCategory = {
  HandTools: 'HandTools'
};

exports.ProductSubCategory = exports.$Enums.ProductSubCategory = {
  HandPlanes: 'HandPlanes',
  Saws: 'Saws',
  Chisels: 'Chisels',
  Spokeshaves: 'Spokeshaves',
  GreenWoodworking: 'GreenWoodworking',
  AccessoryTools: 'AccessoryTools'
};

exports.Prisma.ModelName = {
  User: 'User',
  HttpNetworkErrorData: 'HttpNetworkErrorData',
  HttpSerializationErrorData: 'HttpSerializationErrorData',
  HttpClientErrorData: 'HttpClientErrorData',
  MissingAttributeErrorData: 'MissingAttributeErrorData',
  InvalidAttributeErrorData: 'InvalidAttributeErrorData',
  InvalidTextErrorData: 'InvalidTextErrorData',
  MissingTextErrorData: 'MissingTextErrorData',
  NonUniqueTextErrorData: 'NonUniqueTextErrorData',
  MissingElementErrorData: 'MissingElementErrorData',
  NonUniqueElementErrorData: 'NonUniqueElementErrorData',
  ProductRecordError: 'ProductRecordError',
  ProductRecord: 'ProductRecord',
  Product: 'Product'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/nickflorin/repos/stockings/src/database/model/generated",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/nickflorin/repos/stockings/src/database/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.8.0",
  "engineVersion": "393aa359c9ad4a4bb28630fb5613f9c281cde053",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRES_PRISMA_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gW10KICBvdXRwdXQgICAgICAgICAgPSAiLi4vbW9kZWwvZ2VuZXJhdGVkIgp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciAgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICAgPSBlbnYoIlBPU1RHUkVTX1BSSVNNQV9VUkwiKSAvLyBVc2VzIENvbm5lY3Rpb24gUG9vbGluZwogIGRpcmVjdFVybCA9IGVudigiUE9TVEdSRVNfVVJMX05PTl9QT09MSU5HIikgLy8gVXNlcyBhIERpcmVjdCBDb25uZWN0aW9uCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQKICBjbGVya0lkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgIEB1bmlxdWUKICBmaXJzdE5hbWUgICAgICAgICAgICAgU3RyaW5nCiAgbGFzdE5hbWUgICAgICAgICAgICAgIFN0cmluZwogIHByb2ZpbGVJbWFnZVVybCAgICAgICBTdHJpbmc/CiAgZW1haWxBZGRyZXNzICAgICAgICAgIFN0cmluZwogIGNyZWF0ZWRBdCAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICBAdXBkYXRlZEF0CiAgY3JlYXRlZFByb2R1Y3RzICAgICAgIFByb2R1Y3RbXSAgICAgICBAcmVsYXRpb24oImNyZWF0ZWRQcm9kdWN0cyIpCiAgdXBkYXRlZFByb2R1Y3RzICAgICAgIFByb2R1Y3RbXSAgICAgICBAcmVsYXRpb24oInVwZGF0ZWRQcm9kdWN0cyIpCiAgY3JlYXRlZFByb2R1Y3RSZWNvcmRzIFByb2R1Y3RSZWNvcmRbXSBAcmVsYXRpb24oImNyZWF0ZWRQcm9kdWN0UmVjb3JkcyIpCiAgdXBkYXRlZFByb2R1Y3RSZWNvcmRzIFByb2R1Y3RSZWNvcmRbXSBAcmVsYXRpb24oInVwZGF0ZWRQcm9kdWN0UmVjb3JkcyIpCn0KCmVudW0gRWxlbWVudEF0dHJpYnV0ZSB7CiAgSFJFRgogIFNSQwogIFZBTFVFCiAgREFUQV9HQV9QUk9EVUNUX05BTUUKfQoKZW51bSBTY3JhcGluZ0Vycm9yQ29kZSB7CiAgTUlTU0lOR19BVFRSSUJVVEUKICBJTlZBTElEX0FUVFJJQlVURQogIE1JU1NJTkdfVEVYVAogIElOVkFMSURfVEVYVAogIE5PTlVOSVFVRV9URVhUCiAgTUlTU0lOR19FTEVNRU5UCiAgTk9OVU5JUVVFX0VMRU1FTlQKICBIVFRQX05FVFdPUksKICBIVFRQX0NMSUVOVAogIEhUVFBfU0VSSUFMSVpBVElPTgp9CgplbnVtIFByb2R1Y3RSZWNvcmREYXRhRmllbGQgewogIFBSSUNFCiAgUkFXX1BSSUNFCiAgU1RBVFVTCn0KCm1vZGVsIEh0dHBOZXR3b3JrRXJyb3JEYXRhIHsKICBpZCAgU3RyaW5nIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkCiAgdXJsIFN0cmluZwp9Cgptb2RlbCBIdHRwU2VyaWFsaXphdGlvbkVycm9yRGF0YSB7CiAgaWQgIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIHVybCBTdHJpbmcKfQoKbW9kZWwgSHR0cENsaWVudEVycm9yRGF0YSB7CiAgaWQgICAgIFN0cmluZyBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIHVybCAgICBTdHJpbmcKICBzdGF0dXMgSW50Cn0KCm1vZGVsIE1pc3NpbmdBdHRyaWJ1dGVFcnJvckRhdGEgewogIGlkICAgICAgICAgU3RyaW5nICAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIGF0dHJpYnV0ZSAgRWxlbWVudEF0dHJpYnV0ZQogIHBhcmVudEh0bWwgU3RyaW5nPwp9Cgptb2RlbCBJbnZhbGlkQXR0cmlidXRlRXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgICAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQKICBhdHRyaWJ1dGUgIEVsZW1lbnRBdHRyaWJ1dGUKICBwYXJlbnRIdG1sIFN0cmluZz8KICB2YWx1ZSAgICAgIFN0cmluZwp9Cgptb2RlbCBJbnZhbGlkVGV4dEVycm9yRGF0YSB7CiAgaWQgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkCiAgcGFyZW50SHRtbCBTdHJpbmc/CiAgdmFsdWUgICAgICBTdHJpbmcKfQoKbW9kZWwgTWlzc2luZ1RleHRFcnJvckRhdGEgewogIGlkICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIHBhcmVudEh0bWwgU3RyaW5nPwp9Cgptb2RlbCBOb25VbmlxdWVUZXh0RXJyb3JEYXRhIHsKICBpZCAgICAgICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQKICBwYXJlbnRIdG1sIFN0cmluZz8KfQoKbW9kZWwgTWlzc2luZ0VsZW1lbnRFcnJvckRhdGEgewogIGlkICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIHBhcmVudEh0bWwgU3RyaW5nPwogIHNlbGVjdG9yICAgU3RyaW5nCn0KCm1vZGVsIE5vblVuaXF1ZUVsZW1lbnRFcnJvckRhdGEgewogIGlkICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQodXVpZCgpKSBAZGIuVXVpZAogIHBhcmVudEh0bWwgU3RyaW5nPwogIHNlbGVjdG9yICAgU3RyaW5nCn0KCm1vZGVsIFByb2R1Y3RSZWNvcmRFcnJvciB7CiAgaWQgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQKICBlcnJvcklkICAgU3RyaW5nICAgICAgICAgICAgICAgICBAdW5pcXVlIEBkYi5VdWlkCiAgZXJyb3JDb2RlIFNjcmFwaW5nRXJyb3JDb2RlCiAgcmVjb3JkICAgIFByb2R1Y3RSZWNvcmQgICAgICAgICAgQHJlbGF0aW9uKCJlcnJvcnMiLCBmaWVsZHM6IFtyZWNvcmRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgcmVjb3JkSWQgIFN0cmluZyAgICAgICAgICAgICAgICAgQHVuaXF1ZSBAZGIuVXVpZAogIGZpZWxkICAgICBQcm9kdWN0UmVjb3JkRGF0YUZpZWxkCiAgbWVzc2FnZSAgIFN0cmluZwp9CgplbnVtIFByb2R1Y3RTdGF0dXMgewogIE9VVF9PRl9TVE9DSwogIElOX1NUT0NLCiAgQVZBSUxBQkxFX0ZPUl9CQUNLT1JERVIKICBOT1RfTElTVEVECn0KCm1vZGVsIFByb2R1Y3RSZWNvcmQgewogIGlkICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkgQGRiLlV1aWQKICB0aW1lc3RhbXAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGNyZWF0ZWRCeSAgICAgICAgICAgICBVc2VyICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJjcmVhdGVkUHJvZHVjdFJlY29yZHMiLCBmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY3JlYXRlZEJ5SWQgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAZGIuVXVpZAogIHVwZGF0ZWRCeSAgICAgICAgICAgICBVc2VyICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJ1cGRhdGVkUHJvZHVjdFJlY29yZHMiLCBmaWVsZHM6IFt1cGRhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXBkYXRlZEJ5SWQgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICBAZGIuVXVpZAogIHVwZGF0ZWRBdCAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgQHVwZGF0ZWRBdAogIHByb2R1Y3QgICAgICAgICAgICAgICBQcm9kdWN0ICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJyZWNvcmRzIiwgZmllbGRzOiBbcHJvZHVjdElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBwcm9kdWN0SWQgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkCiAgcHJpY2UgICAgICAgICAgICAgICAgIEZsb2F0PwogIHJhd1ByaWNlICAgICAgICAgICAgICBTdHJpbmc/CiAgc3RhdHVzICAgICAgICAgICAgICAgIFByb2R1Y3RTdGF0dXM/CiAgd2FzTWFudWFsbHlDcmVhdGVkICAgIEJvb2xlYW4gICAgICAgICAgICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBtYW51YWxseUNoYW5nZWRGaWVsZHMgUHJvZHVjdFJlY29yZERhdGFGaWVsZFtdIEBkZWZhdWx0KFtdKQogIGVycm9ycyAgICAgICAgICAgICAgICBQcm9kdWN0UmVjb3JkRXJyb3JbXSAgICAgQHJlbGF0aW9uKCJlcnJvcnMiKQp9CgplbnVtIFByb2R1Y3RDYXRlZ29yeSB7CiAgSGFuZFRvb2xzCn0KCmVudW0gUHJvZHVjdFN1YkNhdGVnb3J5IHsKICBIYW5kUGxhbmVzCiAgU2F3cwogIENoaXNlbHMKICBTcG9rZXNoYXZlcwogIEdyZWVuV29vZHdvcmtpbmcKICBBY2Nlc3NvcnlUb29scwp9Cgptb2RlbCBQcm9kdWN0IHsKICBpZCAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpIEBkYi5VdWlkCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBjcmVhdGVkQnkgICAgIFVzZXIgICAgICAgICAgICAgICAgIEByZWxhdGlvbigiY3JlYXRlZFByb2R1Y3RzIiwgZmllbGRzOiBbY3JlYXRlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNyZWF0ZWRCeUlkICAgU3RyaW5nICAgICAgICAgICAgICAgQGRiLlV1aWQKICB1cGRhdGVkQXQgICAgIERhdGVUaW1lICAgICAgICAgICAgIEB1cGRhdGVkQXQKICB1cGRhdGVkQnkgICAgIFVzZXIgICAgICAgICAgICAgICAgIEByZWxhdGlvbigidXBkYXRlZFByb2R1Y3RzIiwgZmllbGRzOiBbdXBkYXRlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHVwZGF0ZWRCeUlkICAgU3RyaW5nICAgICAgICAgICAgICAgQGRiLlV1aWQKICBuYW1lICAgICAgICAgIFN0cmluZz8KICBzbHVnICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgIEB1bmlxdWUKICBjb2RlICAgICAgICAgIFN0cmluZz8KICBpbWFnZVNyYyAgICAgIFN0cmluZz8KICByZWNvcmRzICAgICAgIFByb2R1Y3RSZWNvcmRbXSAgICAgIEByZWxhdGlvbigicmVjb3JkcyIpCiAgc3RhdHVzICAgICAgICBQcm9kdWN0U3RhdHVzPwogIHByaWNlICAgICAgICAgRmxvYXQ/CiAgY2F0ZWdvcnkgICAgICBQcm9kdWN0Q2F0ZWdvcnkKICBzdWJDYXRlZ29yaWVzIFByb2R1Y3RTdWJDYXRlZ29yeVtdCn0K",
  "inlineSchemaHash": "d1060abf7c8142c992b7881585a18d4aaa7d64b3f06e8d25f1cdca0efbc76ba4",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clerkId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profileImageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailAddress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"createdProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"createdProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"updatedProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdProductRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"createdProductRecords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedProductRecords\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"updatedProductRecords\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpNetworkErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpSerializationErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HttpClientErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingAttributeErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ElementAttribute\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InvalidAttributeErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attribute\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ElementAttribute\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"InvalidTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NonUniqueTextErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MissingElementErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NonUniqueElementErrorData\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentHtml\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"selector\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductRecordError\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errorCode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ScrapingErrorCode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"record\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"errors\",\"relationFromFields\":[\"recordId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"field\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecordDataField\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProductRecord\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProductRecords\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProductRecords\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Product\",\"relationName\":\"records\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rawPrice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wasManuallyCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"manuallyChangedFields\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ProductRecordDataField\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"errors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecordError\",\"relationName\":\"errors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Product\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"createdProducts\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"updatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"updatedProducts\",\"relationFromFields\":[\"updatedById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageSrc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"records\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductRecord\",\"relationName\":\"records\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductCategory\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subCategories\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ProductSubCategory\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"ElementAttribute\":{\"values\":[{\"name\":\"HREF\",\"dbName\":null},{\"name\":\"SRC\",\"dbName\":null},{\"name\":\"VALUE\",\"dbName\":null},{\"name\":\"DATA_GA_PRODUCT_NAME\",\"dbName\":null}],\"dbName\":null},\"ScrapingErrorCode\":{\"values\":[{\"name\":\"MISSING_ATTRIBUTE\",\"dbName\":null},{\"name\":\"INVALID_ATTRIBUTE\",\"dbName\":null},{\"name\":\"MISSING_TEXT\",\"dbName\":null},{\"name\":\"INVALID_TEXT\",\"dbName\":null},{\"name\":\"NONUNIQUE_TEXT\",\"dbName\":null},{\"name\":\"MISSING_ELEMENT\",\"dbName\":null},{\"name\":\"NONUNIQUE_ELEMENT\",\"dbName\":null},{\"name\":\"HTTP_NETWORK\",\"dbName\":null},{\"name\":\"HTTP_CLIENT\",\"dbName\":null},{\"name\":\"HTTP_SERIALIZATION\",\"dbName\":null}],\"dbName\":null},\"ProductRecordDataField\":{\"values\":[{\"name\":\"PRICE\",\"dbName\":null},{\"name\":\"RAW_PRICE\",\"dbName\":null},{\"name\":\"STATUS\",\"dbName\":null}],\"dbName\":null},\"ProductStatus\":{\"values\":[{\"name\":\"OUT_OF_STOCK\",\"dbName\":null},{\"name\":\"IN_STOCK\",\"dbName\":null},{\"name\":\"AVAILABLE_FOR_BACKORDER\",\"dbName\":null},{\"name\":\"NOT_LISTED\",\"dbName\":null}],\"dbName\":null},\"ProductCategory\":{\"values\":[{\"name\":\"HandTools\",\"dbName\":null}],\"dbName\":null},\"ProductSubCategory\":{\"values\":[{\"name\":\"HandPlanes\",\"dbName\":null},{\"name\":\"Saws\",\"dbName\":null},{\"name\":\"Chisels\",\"dbName\":null},{\"name\":\"Spokeshaves\",\"dbName\":null},{\"name\":\"GreenWoodworking\",\"dbName\":null},{\"name\":\"AccessoryTools\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    POSTGRES_PRISMA_URL: typeof globalThis !== 'undefined' && globalThis['POSTGRES_PRISMA_URL'] || typeof process !== 'undefined' && process.env && process.env.POSTGRES_PRISMA_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
