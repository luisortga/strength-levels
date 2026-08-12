# ⚡ SuperHero Power Index

¡Bienvenido al universo donde el poder se mide con precisión, pero se siente con pasión! 🚀💥

**SuperHero Power Index** es una herramienta ligera y divertida desarrollada en **JavaScript (Node.js)** que te permite evaluar y comparar el nivel de poder de cualquier superhéroe o villano que puedas imaginar en una escala de **0 a 80,000**.

Desde el héroe callejero que patrulla en las sombras hasta las entidades cósmicas capaces de alterar la realidad, esta herramienta procesa los datos directamente desde tu consola y transforma esos números en estadísticas fascinantes sobre tu universo de héroes.

---

## 🌟 ¿De qué se trata este proyecto?

Detrás de cada gran historia hay batallas memorables, enfrentamientos épicos y debates interminables sobre *"¿quién le ganaría a quién?"*. Este script nace con la idea de darle estructura y diversión a esos debates:

- **Interactividad inmediata**: Pasa los datos directamente por la línea de comandos (CLI) de forma rápida sin configurar archivos complicados.
- **Visualiza la brecha de poder**: Descubre qué tan lejos está un detective brillante de un ser con poder absoluto.
- **Estadísticas vivas**: Obtén al instante la media, mediana, el héroe más fuerte, el más humano y la dispersión de poder de tu equipo seleccionado.

---

## 📊 La Escala del Poder (0 - 80,000)

| Rango | Escala | ¿Quiénes están aquí? |
| :--- | :---: | :--- |
| 🦇 **Héroes Terrenales / Callejeros** | `0 - 5,000` | Voluntad de hierro, intelecto brillante y entrenamiento humano supremo *(ej. Batman, Daredevil)* |
| 🕸️ **Metahumanos Urbano** | `5,001 - 20,000` | Agilidad, reflejos asombrosos y fuerza local *(ej. Spider-Man, Wolverine)* |
| 🛡️ **Protectores Planetarios** | `20,001 - 50,000` | Defensores globales capaces de cambiar el rumbo de una guerra *(ej. Iron Man, Aquaman)* |
| ⚡ **Fuerzas de la Naturaleza** | `50,001 - 75,000` | Poder que hace temblar dimensiones y galaxias *(ej. Thor, Doctor Strange, Superman)* |
| 💥 **Nivel Absoluto / Indestructible** | `75,001 - 80,000` | El techo del universo. Un solo golpe redefine todo *(ej. Saitama)* |

---

## 🚀 ¿Cómo usarlo?

### 1. Requisitos
Solo necesitas tener instalado **Node.js** en tu equipo.

### 2. Ejecución directa desde consola
Pasa los nombres de tus personajes y sus niveles de poder (separados por dos puntos `:`) directamente como argumentos en la terminal:

```bash
node index.js Batman:3200 SpiderMan:18500 Thor:72000 DoctorStrange:68000 Saitama:80000
```

---

## 📈 Ejemplo de Salida en Consola

Al ejecutar el comando anterior, la consola proyectará un resumen visual e inspirador con todas las estadísticas calculadas:

```text
============================================================
           ✨ SUPERHERO POWER INDEX - STATS ✨
============================================================
 🦸‍♂️ Héroes Evaluados   : 5
 🏆 El Más Poderoso    : Saitama con 80,000 pts (¡Poder Absoluto!)
 🦇 El Más Humano      : Batman con 3,200 pts (Pura determinación)
------------------------------------------------------------
 📊 MÉTRICAS DEL UNIVERSO:
  • Promedio de Poder  : 48,340 pts
  • Mediana de Poder   : 68,000 pts
  • Brecha de Poder    : 76,800 pts (Diferencia Máx - Mín)
------------------------------------------------------------
 🐍 DISTRIBUCIÓN DEL EQUIPO:
  [Terrenal / Callejero] : 1 (20.0%)
  [Metahumano Urbano]    : 1 (20.0%)
  [Protectores Globales] : 0 (0.0%)
  [Fuerzas Galácticas]   : 2 (40.0%)
  [Absolutos / Indestructibles] : 1 (20.0%)
============================================================
 ¡El equilibrio de tu universo está listo para la batalla!
```

---

## ❤️ Contribuir y Compartir

¿Tienes ideas para agregar gráficos en consola, integrar nuevos parámetros de combate o mejorar la fórmula del promedio? ¡Todas las contribuciones son bienvenidas!

1. Haz un **Fork** de este repositorio.
2. Crea tu rama de ideas (`git checkout -b mi-idea-epica`).
3. Envía tus cambios (`git commit -m 'Añadida métrica de potencial oculto'`).
4. Abre un **Pull Request** y sigamos creando universos.

---
Hecho con ⚡, café y pasión por los superhéroes.
