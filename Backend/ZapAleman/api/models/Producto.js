/**
 * Producto.js
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
    color: {
      type: 'string',
      required: true,
    },
    talla: {
      type: 'number',
      required: true,
    },
    descripcion: {
      type: 'string',
      required: true,
    },
    precio: {
      type: 'number',
      required: true,
    },
    imagen: {
      type: 'string',
      required: true,
    },
    // RELACIONES
    // Producto -> DetalleFactura1
    detalles: {
      collection: 'DetalleFactura',
      via: 'producto',
    }
  },

};

