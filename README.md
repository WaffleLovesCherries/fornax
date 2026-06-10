# FORNAX

Registro de entrenamiento Push / Pull / Pierna. App estática (React + Vite + TypeScript),
sin backend: todo se guarda en `localStorage` del dispositivo.

## Uso

- **Entrenar**: elegí la sesión del día, anotá el peso de cada ejercicio (cada campo tiene
  su propio selector LB/KG, con conversión automática), marcá cada ejercicio como hecho.
  El botón *Terminar entrenamiento* se habilita cuando está todo marcado y guarda los pesos
  en el historial. Si recargás a mitad de sesión, no se pierde nada.
- **Métricas**: gráfico de progreso de peso por ejercicio y panel de **Estancados** —
  ejercicios con 3+ sesiones sin subir de peso durante 2+ semanas.
- **Exportar / Importar**: respaldo completo en JSON desde la cabecera. Importar reemplaza
  los datos actuales (pide confirmación).

## Editar el plan de ejercicios

Todo el plan vive en [`src/data/plan.ts`](src/data/plan.ts). Agregar o quitar ejercicios es
editar ese array; el historial guardado no se rompe porque está indexado por `id`:

- **No renombres ni reutilices un `id` existente** — perderías o mezclarías su historial.
- Quitar un ejercicio es seguro: su historial queda guardado (y se exporta) por si lo volvés a agregar.
- Agregar uno nuevo es seguro: empieza con historial vacío.

## Desarrollo

```sh
npm install
npm run dev      # servidor local
npm run build    # tsc + vite build → dist/
npm run preview  # sirve el build
```

## Deploy en GitHub Pages

El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) publica `dist/`
en cada push a `main`. Pasos una sola vez:

1. `git init && git add -A && git commit -m "fornax"`
2. Crear el repo en GitHub y hacer push de `main`.
3. En **Settings → Pages**, elegir **Source: GitHub Actions**.

`vite.config.ts` usa `base: './'`, así que funciona con cualquier nombre de repo.
