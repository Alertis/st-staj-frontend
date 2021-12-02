import React from "react";
import "./asideMenu.css";

export default function AsideMenu() {
  return (
    <div className="h-100 d-flex flex-column justify-content-between p-5 text-light">
      <hr className="hr w-100" />
      <ul className="aside-menu-items mt-3">
        <a className="aside-menu-item ">
          <i class="fas fa-home"></i>
          <p className="mx-4">Anasayfa</p>
        </a>
        <a className="aside-menu-item">
          <i class="fas fa-cloud"></i>
          <p className="mx-4">Servisler</p>
        </a>
        <a className="aside-menu-item ">
          <i class="fab fa-sketch"></i>
          <p className="mx-4">Sketch</p>
        </a>
        <a className="aside-menu-item  ">
          <i class="fas fa-flask"></i>
          <p className="mx-4">Deneyler</p>
        </a>
        <a className="aside-menu-item ">
          <i class="fab fa-sketch"></i>
          <p className="mx-4">Güvenlik</p>
        </a>
        <a className="aside-menu-item ">
          <i class="fas fa-globe-europe"></i>
          <p className="mx-4">Kullanıcılar</p>
        </a>
        <a className="aside-menu-item ">
          <i class="fab fa-sketch"></i>
          <p className="mx-4">Güvenlik</p>
        </a>
        <a className="aside-menu-item ">
          <i class="fas fa-dot-circle"></i>
          <p className="mx-4">Renkler</p>
        </a>
      </ul>
      <ul>
        <a className="aside-menu-item ">
          <i class="fas fa-sign-out-alt"></i>
          <p className="mx-4">Çıkış</p>
        </a>
      </ul>
    </div>
  );
}
