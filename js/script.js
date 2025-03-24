document.addEventListener("DOMContentLoaded", function () {
    // Animación de entrada para la tabla
    const table = document.querySelector("table");
    table.style.opacity = "0";
    table.style.transform = "translateY(20px)";
    setTimeout(() => {
        table.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        table.style.opacity = "1";
        table.style.transform = "translateY(0)";
    }, 200);

    // Animaciones para los botones
    document.querySelectorAll(".btn, .edit, .delete").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
            button.style.transition = "transform 0.2s ease-in-out";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });

    // Efecto al eliminar producto
    document.querySelectorAll(".delete").forEach(button => {
        button.addEventListener("click", function (e) {
            if (!confirm("¿Estás seguro de que deseas eliminar este producto?")) {
                e.preventDefault();
            } else {
                const row = this.closest("tr");
                row.style.transition = "opacity 0.5s ease-out";
                row.style.opacity = "0";
                setTimeout(() => row.remove(), 500);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.style.opacity = "0";
        form.style.transform = "translateY(20px)";
        setTimeout(() => {
            form.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            form.style.opacity = "1";
            form.style.transform = "translateY(0)";
        }, 200);
    }
});