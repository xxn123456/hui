<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
table{
  border-collapse: collapse;

  border: 1px solid red;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #ebedf0;
    width: 100%;
    margin: 8px 0 16px;
  }
 table th,table td {
    color: #314659;
    border: 1px solid #ebedf0;
    text-align: left;
    padding: 10px 15px;
  }
 table th {
    white-space: nowrap;
    color: #5c6b77;
    font-weight: 500;
    background: rgba(0, 0, 0, 0.02);
  }
</style>


