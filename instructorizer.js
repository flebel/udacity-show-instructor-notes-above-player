// Copyright (c) 2015 Francois Lebel. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var rowExists = setInterval(function() {
  col = document.getElementsByClassName("col-xs-9 ng-scope")[0];
  if (col) {
    row = col.getElementsByClassName("row");
    player = row[0];
    notes = row[2];
    player.parentNode.insertBefore(notes, player);
    clearInterval(rowExists);
  }
}, 100);

