# Mini Magazin

Interfață în limba română, prețuri în MDL ,conversie din USD

Aplicație SPA cu routing și API, construită cu **React + Vite + react-router-dom**.
Date: [fakestoreapi.com](https://fakestoreapi.com/products).

## Rulare

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producție în /dist
```

## Rute

| Rută | Pagină |
|------|--------|
| `/` | Home |
| `/products` | Listă produse (imagine, titlu, preț, **View details**) |
| `/products/:id` | Detalii produs (`useParams` → `GET /products/{id}`) |
| `/about` | About |
| `/dashboard`, `/dashboard/profile`, `/dashboard/settings` | Nested routes (challenge) |
| `*` | 404 + buton Home |

## Bonus – query parameters

- `/products?category=electronics`
- `/products?sort=price` (sau `price-desc`)
- `/products?search=phone`

Se pot combina: `/products?category=electronics&sort=price&search=ssd`.

## Structură

```
mini-store/
├── public/
│   └── images/             
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          
    ├── App.jsx            
    ├── api.js              
    ├── index.css
    ├── components/
    │   ├── Layout.jsx      
    │   └── ProductCard.jsx
    └── pages/
        ├── Home.jsx
        ├── Products.jsx
        ├── ProductDetails.jsx
        ├── About.jsx
        ├── NotFound.jsx
        └── dashboard/
            ├── Dashboard.jsx
            ├── DashboardHome.jsx
            ├── Profile.jsx
            └── Settings.jsx
```

## Checklist

- [x] routing
- [x] navigare
- [x] route parameter
- [x] query parameter
- [x] API list + details
- [x] loading/error
- [x] 404
