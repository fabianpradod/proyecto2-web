# Calculadora React

Una calculadora simple construida con React, TypeScript y Vite.

## Instalacion

```bash
bun install
```

## Correr la aplicacion

```bash
bun run dev
```

## Correr los tests

```bash
bun run test
```

o con npm:

```bash
npm test
```

## Correr Storybook

```bash
bun run storybook
```

## Correr Lint

```bash
bun run lint
```

## Deployment

Servidor de la clase: 

## Repositorio

GitHub: https://github.com/fabianpradod/proyecto2-web

---

## Puntos implementados

### Funcionalidad base
- Calculadora con display y teclado numerico compuesto de botones HTML
- Concatenacion de digitos en el display
- Limpieza del display al presionar una operacion
- Resultado inmediato al presionar operaciones consecutivas
- Boton de igual
- Suma, resta y multiplicacion
- Display limitado a 9 caracteres
- ERROR para resultados negativos por resta
- ERROR para resultados superiores a 999999999

### Storybook
- Historia: Button (NumberButton, OperatorButton, ActionButton, EqualsButton)
- Historia: Display (Empty, WithNumber, WithDecimal, MaxLength)
- Historia: Keyboard (DefaultKeyboard)
- Historia: ErrorState

### Tests
- Concatena digitos en el display
- Limpia el display al presionar una operacion
- Calcula suma con igual
- Calcula operaciones repetidas inmediatamente
- Muestra ERROR para resta negativa
- Ignora digitos despues del noveno caracter
- Muestra ERROR para resultado superior a 999999999
- Maneja input decimal
- Previene puntos decimales duplicados
- Division con resultado decimal largo cabe en 9 caracteres
- Muestra ERROR para division por cero
- Calcula modulo
- Alterna signo con +/-

### Linting
- Codigo compliant con JavaScript Standard
- Regla custom: sin punto y coma
- Regla custom: maximo 120 caracteres por linea
- Script `lint` configurado para `.js`, `.jsx`, `.ts`, `.tsx`

### Bonos implementados
- Punto decimal (5 puntos)
- Division (10 puntos)
- Modulo (5 puntos)
- Funcion +/- (5 puntos)
- Hook personalizado `useCalculator` (10 puntos)
- Ningun archivo de componente supera 20 lineas (20 puntos)
- Title y favicon personalizados (5 puntos)
- TypeScript (5 puntos)
- Bun como package manager con lockfile commiteado (5 puntos)
- CI con GitHub Actions (5 puntos)
- Atributos de accesibilidad: aria-label, aria-live (5 puntos)