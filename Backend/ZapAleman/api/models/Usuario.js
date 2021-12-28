/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true,
    },
    apellido: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      unique: true,
      required: true,
      isEmail: true,
    },
    // RELACIONES
    // Usuario <- Rol
    rol: {
      model: 'Rol',
      required: true
    },
    // Usuario -> Factura
    facturas: {
      collection: 'Factura',
      via: 'usuario',
    }
  },

};

