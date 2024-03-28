// Copyright (c) 2024 Julianne Leblanc-Peltier All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: March 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const aBase = parseInt(document.getElementById("a-base").value)
  const bBase = parseInt(document.getElementById("b-base").value)
  const height = parseInt(document.getElementById("height").value)

  // process
  const area = ((aBase + bBase) / 2) * height

  // output
  document.getElementById("area-of-trapezoid").innerHTML = area.toFixed(2) + " mm²"
}
