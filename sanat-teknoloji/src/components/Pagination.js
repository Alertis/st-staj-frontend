import React, { useState } from "react";
import "./pagination.css";

export default function Pagination({
  currentPage,
  lastPage,
  nextPage,
  previousPage,
}) {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5 pagination">
      <i
        class="fas fa-arrow-alt-circle-left"
        onClick={() => previousPage()}
      ></i>
      <span className="pagination-page-number">{currentPage}</span>
      <span className="mx-1">of</span>
      <span className="pagination-page-number">{lastPage}</span>
      <i class="fas fa-arrow-alt-circle-right " onClick={() => nextPage()}></i>
    </div>
  );
}
