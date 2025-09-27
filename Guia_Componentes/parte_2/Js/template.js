
const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM", precio: 1900000, Imagen: "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/latam/co/support/laptop-user-guide/img/laptop.png" },
    { titulo: "Mouse", desc: "Inalámbrico", precio: 95000, Imagen: "https://www.nicepng.com/png/detail/285-2853862_pc-mouse-png-image-logitech-g-pro-gaming.png" },
    { titulo: "Teclado", desc: "Mecánico", precio: 350000, Imagen: "https://co-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/5/6/56R64AA-1_T1679069848.png" },
    { titulo: "Monitor", desc: "4K UHD", precio: 750000, Imagen: "https://images.philips.com/is/image/philipsconsumer/1fdc951c612c4d199334b01b00be880b?wid=700&hei=700&$pnglarge$" },
    { titulo: "Auriculares", desc: "Cancelación de ruido", precio: 200000, Imagen: "https://uy.jbl.com/on/demandware.static/-/Sites-siteCatalog_JB_UY/es_UY/dwe2124ec7/Thumbs/SUPRESSORES.png" },
    { titulo: "Disco Duro", desc: "1TB M.2", precio: 450000, Imagen: "https://atlas-content-cdn.pixelsquid.com/assets_v2/324/3240721164212901361/jpeg-600/G03.jpg?modifiedAt=1" },
    { titulo: "Nvidia Rtx 5090Ti", desc: "Graficos", precio: 6000000, Imagen: "https://atlas-content-cdn.pixelsquid.com/stock-images/rtx-5090-graphics-card-2Jzm6r7-600.jpg" },
    { titulo: "Cámara Web", desc: "4k Full HD +", precio: 1200000, Imagen: "https://manuais.iessanclemente.net/images/8/81/Webcam.png" },
    { titulo: "Router", desc: "WiFi 6", precio: 250000, Imagen: "https://img.freepik.com/vector-premium/enrutador-wifi-ilustracion-vector-transmision-internet_110233-3670.jpg?semt=ais_incoming&w=740&q=80" },
    { titulo: "Tablet", desc: "10.5 pulgadas", precio: 800000, Imagen: "https://p1-ofp.static.pub/fes/cms/2022/08/01/xebuqjcm3zfcr1n7u6qucgsrt8apgj143698.png" }
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector(".precio").textContent = producto.precio.toLocaleString('es-CO')
    clon.querySelector(".imagen").src = producto.Imagen;

    contenedor.appendChild(clon);
});
