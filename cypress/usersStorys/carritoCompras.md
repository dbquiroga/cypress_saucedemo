Feature: Add To Cart

Background:
Given: el usuario ha iniciado sesión.
And: el producto NO ha sido añadido al SCP aún

Scenario: Usuario añade un producto del PLP al Shopping-Cart exitosamente.
Given: el usuario se encuentra en el PLP
When: el usuario hace click sobre el boton “Add To Cart” en el producto deseado.
Then: el producto se agrega al Shopping-Cart.
And: el string del botón "Add to Cart" es cambiado a "Remove"
And: se suma +1 en el icono del carrito de compras, ubicado en la parte superior derecha.
And: el producto añadido desde el PLP debe visualizar las mismas características en el SCP

Scenario: Usuario añade un producto del PDP al Shopping-Cart exitosamente.
Given: el usuario se encuentra en el PDP del producto
When: el usuario hace click sobre el boton “Add To Cart”.
Then: el producto se agrega al Shopping-Cart.
And: el string del botón "Add to Cart" es cambiado a "Remove"
And: se suma +1 en el icono del carrito de compras, ubicado en la parte superior derecha.
And: el producto añadido desde el PDP debe visualizar las mismas características en el SCP

Nomenclatura

PLP = Product List Page
SLP = Shopping product List
SCP = Shopping card Page
PDP = Product detail Page
