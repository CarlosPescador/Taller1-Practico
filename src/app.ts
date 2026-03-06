import { fetchUsers } from "./api";
import type { User } from "./types";

function getFullName(user: User): string {
  return `${user.name.first} ${user.name.last}`;
}

function renderUserCard(user: User): string {
  return `
    <article class="user-card">
      <img src="${user.picture.large}" alt="${getFullName(user)}" class="avatar" loading="lazy" />
      <h3 class="user-name">${getFullName(user)}</h3>
      <p class="user-username">@${user.login.username}</p>
      <div class="user-info">
        <div class="info-row">
          <span class="info-label">Correo</span>
          <span class="info-value">${user.email}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Telefono</span>
          <span class="info-value">${user.phone}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Pais</span>
          <span class="info-value">${user.location.country}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Ciudad</span>
          <span class="info-value">${user.location.city}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Edad</span>
          <span class="info-value">${user.dob.age} años</span>
        </div>
      </div>
    </article>
  `;
}

function renderGrid(users: User[]): void {
  const grid = document.getElementById("users-grid") as HTMLDivElement;
  grid.innerHTML = users.map(renderUserCard).join("");
}

function setLoading(active: boolean): void {
  const loader = document.getElementById("loader") as HTMLDivElement;
  const grid   = document.getElementById("users-grid") as HTMLDivElement;
  loader.style.display = active ? "flex" : "none";
  grid.style.opacity   = active ? "0" : "1";
}

function setError(message: string): void {
  const errorEl = document.getElementById("error-banner") as HTMLDivElement;
  errorEl.textContent = message;
  errorEl.style.display = "block";
  setTimeout(() => (errorEl.style.display = "none"), 4000);
}

async function init(): Promise<void> {
  setLoading(true);
  try {
    const users = await fetchUsers(12);
    renderGrid(users);
  } catch {
    setError("No se pudo conectar con la API. Verifica tu conexion.");
  } finally {
    setLoading(false);
  }
}

init();