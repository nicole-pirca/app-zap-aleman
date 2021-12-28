/**
 * Factura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fecha: {
      type: 'number',
      required: true,
    },
    total: {
      type: 'number',
      required: true,
    },
    // RELACIONES
    // Factura <- Usuario
    usuario: {
      model: 'Usuario',
      required: true,
    },
    // Factura -> DetalleFactura
    detalles: {
      collection: 'DetalleFactura',
      via: 'factura',
    },
  },

};

