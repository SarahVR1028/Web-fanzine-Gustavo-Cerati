# Web-fanzine-Gustavo-Cerati
Un web fanzine sobre cerati y su discografía 
# ¿Y el after del after?
Fanzine digital sobre Gustavo Cerati

## Descripción
Este proyecto es un fanzine digital sobre Gustavo Cerati y su carrera musical. Lo hice con HTML, CSS y JavaScript en Visual Studio Code y fui subiendo los cambios a GitHub. Quería que se viera como una revista hecha a mano y no como una página web normal, por eso usé recortes, cinta adhesiva, fotos en blanco y negro y letra de máquina de escribir.

El nombre viene de una frase muy conocida entre los fans de Cerati. Me gustó que el título fuera una pregunta porque le da un toque chevere y lo dijo Cerati una vez.

## Páginas
El fanzine tiene cinco páginas conectadas por un menú:

 Inicio: la portada de la revista, con el nombre, el número de edición, el titular, una introducción y el sumario.
Historia: sus inicios, Soda Stereo, su carrera solista y una línea de tiempo donde se puede hacer clic en cada año.
Discografía: sus cinco discos solistas. Cada uno tiene un botón que abre una ventana con más información.
Escuchar: canciones de Soda Stereo y de su etapa solista con enlaces a YouTube y Spotify, y un botón que suena como una guitarra.
Legado: una reflexión sobre su influencia, algunas frases suyas con la fuente, enlaces a conciertos y entrevistas, y un cierre como la última página de una revista.

## Diseño
Usé negro, blanco, rojo, azul y plateado, inspirada en los años 80 y en Soda Stereo. Las fuentes las saqué de Google Fonts: una grande para los títulos, una sencilla para los textos, una de máquina de escribir para las notas y una de marcador para el titular. Para darle el estilo de fanzine puse las fotos un poco torcidas, con cinta adhesiva encima, en blanco y negro como fotocopia, y un borde de papel rasgado debajo del título de cada página.

## Librería
Usé la librería AOS (Animate On Scroll), que sirve para que los elementos aparezcan con una animación cuando uno va bajando por la página. Es gratuita, la creó Michał Sajnóg y está publicada en GitHub. No tuve que descargarla: la conecté con un link en cada página, uno para sus estilos y otro para su código.

La elegí porque era la más fácil de usar. Solo tuve que activarla en mi archivo de JavaScript y después ponerle a cada elemento qué animación quería. Usé animaciones para que las cosas aparezcan subiendo, entrando desde un lado, con zoom o girando como una carta (esta la usé en las tarjetas de los discos). También le puse un pequeño retraso a algunas para que aparecieran una detrás de otra.

## Interactividad
Con JavaScript hice el menú que se abre en el celular, la línea de tiempo que cambia la información según el año que elijas, la ventana que se abre con la información de cada disco y el sonido de guitarra que suena al hacer clic en el botón de la página Escuchar, en el vinilo de la portada y en las portadas de los discos.

Con CSS hice los efectos al pasar el mouse: las tarjetas se levantan, las portadas hacen zoom y la foto de la portada pasa de blanco y negro a color.

## Imágenes, GIF y sonido
Usé tres fotos de Cerati y las cinco portadas de sus discos. Decidí guardarlas dentro del proyecto en vez de usar links de otras páginas, para que no desaparezcan si esa página las borra.

En la portada puse un GIF de un disco de vinilo girando.

Al principio quería poner un reproductor con sus canciones, pero tienen derechos de autor, así que puse enlaces a YouTube y Spotify y agregué un sonido de guitarra sin derechos de autor.

## Hipervínculos
El menú conecta las cinco páginas. En Escuchar hay enlaces a cada canción y en Legado hay enlaces a conciertos, entrevistas, artículos y plataformas de música.



## Problemas que tuve
Al principio la página se veía sin diseño porque había dejado los archivos de CSS y JavaScript sueltos en vez de dentro de sus carpetas. También tuve problemas con una carpeta que quedó dentro de otra, con un archivo que tenía tilde en el nombre y con el GIF, que no aparecía porque la ruta estaba mal escrita. Con eso aprendí que hay que organizar bien las carpetas y escribir los nombres de los archivos exactamente igual.

## Fuentes
Wikipedia, La Nación, Rolling Stone en español y el diario Conclusión. La librería AOS es de Michał Sajnóg. Las fotos y portadas pertenecen a sus autores. 
