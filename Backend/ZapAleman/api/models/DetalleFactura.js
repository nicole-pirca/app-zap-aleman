/**
 * DetalleFactura.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cantidad: {
      type: 'number',
      required: true,
    },
    subtotal: {
      type: 'number',
      required: true,
    },
    // RELACIONES
    // DetalleFactura <- Factura
    factura: {
      model: 'Factura',
      required: true,
    },
    // DetalleFactura <- Producto
    producto: {
      model: 'Producto',
      required: false,
    },
    // DetalleFactura <- Servicio
    servicio: {
      model: 'Servicio',
      required: false,
    }
  },

};

