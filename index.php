<?php
include 'conexion.php';

// Obtener productos
$sql = "SELECT * FROM productos";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD de Productos</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h2>Lista de Productos</h2>
    <a href="crear.php" class="btn">Agregar Producto</a>
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Acciones</th>
        </tr>
        <?php while($row = $result->fetch_assoc()) { ?>
            <tr>
                <td><?= $row['id']; ?></td>
                <td><?= $row['nombre']; ?></td>
                <td>$<?= $row['precio']; ?></td>
                <td><?= $row['descripcion']; ?></td>
                <td>
                    <a href="editar.php?id=<?= $row['id']; ?>" class="edit">Editar</a>
                    <a href="eliminar.php?id=<?= $row['id']; ?>" class="delete">Eliminar</a>
                </td>
            </tr>
        <?php } ?>
    </table>

    <script src="js/script.js"></script>
</body>
</html>