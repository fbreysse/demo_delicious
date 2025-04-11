# 🧮 Projet : Calculateur de Pricing pour Solutions Médicales

## 🌐 Objectif

Créer un site web simple qui permet aux médecins de :
- Sélectionner les logiciels souhaités
- Indiquer le nombre de médecins dans leur cabinet
- Obtenir une estimation de prix avec application de remises

---

## 🧱 Stack Technique

- **Frontend (phase 1)** : HTML/CSS + JavaScript (ou React)
- **Backend (phase 2)** : Supabase (PostgreSQL + Auth + éventuellement Edge Functions)
- **Déploiement** : Vercel ou Netlify
- **Design** : TailwindCSS (facultatif pour un style propre et rapide)

---

## 🧩 PHASE 1 — VERSION 100% FRONTEND

### 🎯 Objectif : Déployer rapidement une version fonctionnelle sans backend

---

### US1 — Initialisation du projet frontend ✅

- [x] Créer un projet HTML/CSS/JS (ou React)
  - Structure de base avec `index.html`
  - Styles personnalisés dans `styles.css`
  - Logique JavaScript dans `script.js`
- [x] Ajouter une page unique `/` avec :
  - Un titre
  - Une brève description
  - Une section formulaire
  - Une section résultats

#### Implémentation réalisée :
- Interface responsive avec TailwindCSS
- Formulaire avec :
  - Liste de produits avec cases à cocher
  - Champ pour le nombre de médecins
  - Affichage des prix en temps réel
- Calculs automatiques avec :
  - Prix de base
  - Remises (10% si >2 produits, 15% si >3 médecins)
  - Prix final

---

### US2 — Définir la liste de produits en dur dans le code ✅

- [x] Créer un tableau JS `products` contenant :
  - `id`
  - `name`
  - `price`
  - `category`
- [x] Exemple :
  ```js
  const products = [
    { id: 'agenda', name: 'Agenda', price: 30, category: 'Gestion' },
    { id: 'dossier', name: 'Dossier Patient', price: 50, category: 'Médical' },
    { id: 'facturation', name: 'Facturation', price: 40, category: 'Administratif' },
  ];
  ```

#### Implémentation réalisée :
- Structure de données améliorée avec 6 produits
- Organisation des produits en 3 catégories :
  - Gestion (Agenda, Prise de rendez-vous en ligne)
  - Médical (Dossier Patient, Téléconsultation)
  - Administratif (Facturation, Gestion des stocks)
- Affichage des produits groupés par catégorie dans l'interface

---

### US3 — Affichage du formulaire de sélection

- [ ] Afficher dynamiquement une liste de cases à cocher pour les produits
- [ ] Ajouter un champ pour entrer le nombre de médecins

---

### US4 — Implémentation de la logique de calcul de prix

- [ ] Créer une fonction `calculatePrice(selectedProducts, numDoctors)` :
  - Additionner les prix des produits
  - Appliquer des règles de discount simples en dur (ex: 10% si >2 produits, 15% si >3 médecins)
- [ ] Afficher :
  - Le prix de base
  - La réduction
  - Le prix final

---

### US5 — Améliorer le design et l'expérience utilisateur

- [ ] Utiliser du CSS ou Tailwind pour rendre l'interface lisible et responsive
- [ ] Afficher les résultats en temps réel lorsque l'utilisateur modifie ses sélections

---

## 🔄 PHASE 2 — INTRODUCTION DE LA BASE DE DONNÉES SUPABASE

### 🎯 Objectif : Rendre les données dynamiques et facilement éditables

---

### US6 — Migration des produits vers Supabase

- [ ] Créer un projet Supabase
- [ ] Créer une table `products` avec :
  - `id` (uuid)
  - `name` (text)
  - `price` (numeric)
  - `category` (text)
- [ ] Ajouter quelques entrées depuis l'interface Supabase

---

### US7 — Récupération des produits dynamiquement

- [ ] Remplacer le tableau JS en dur par un fetch vers l'API Supabase
- [ ] Afficher les produits dans le formulaire de manière identique à la phase 1

---

### US8 — Migration des règles de discount vers Supabase

- [ ] Créer une table `discounts` avec :
  - `id` (uuid)
  - `min_doctors` (int)
  - `min_products` (int)
  - `percentage` (numeric)
- [ ] Récupérer ces règles au chargement
- [ ] Adapter `calculatePrice` pour utiliser les règles issues de la base

---

### US9 — Sauvegarde des simulations (optionnel)

- [ ] Créer une table `quotes` :
  - `id`
  - `selected_products`
  - `num_doctors`
  - `discount_applied`
  - `total_price`
  - `timestamp`
- [ ] Ajouter un bouton "Sauvegarder cette simulation"
- [ ] Stocker les données dans la base à la soumission

---

### US10 — Authentification utilisateur (optionnel)

- [ ] Activer Supabase Auth
- [ ] Ajouter une page de login (email/password)
- [ ] Associer les simulations (`quotes`) à l'utilisateur connecté

---

## 🚀 PHASE 3 — DÉPLOIEMENT

### US11 — Déployer la version web

- [ ] Connecter le projet à Vercel ou Netlify
- [ ] Déclencher le déploiement automatique depuis GitHub
- [ ] Tester que l'application fonctionne bien en production

---

## ✅ Testabilité

Chaque user story est testable :
- Vérification visuelle de l'UI
- Tests manuels de calcul de pricing
- Inspection des données Supabase
- Utilisation de console.log pour valider la logique

---

## 🔮 Prochaines évolutions

- Génération PDF de la simulation
- Envoi de la simulation par email
- Intégration CRM ou suivi commercial
- Interface admin pour gérer les produits et remises

---
