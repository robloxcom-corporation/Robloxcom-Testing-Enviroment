function parse_array() {
  var input_value = document.getElementById("input").value;

  if (input_value.toUpperCase() !== input_value) {
    return "ERROR: contains letter";
  };

  var regx = / /g;
  input_str = input_value.replace(regx, '');

  var input_arr = input_str.split(',');
  var input_arr_raw = input_arr;
  var data = {stretches: new Array(), currentStart: 0, raw:input_arr_raw};
  for (var i = 1; i < input_arr.length; i++) {

    if (input_arr[i] != input_arr[i-1] || (i == input_arr.length - 1 && input_arr[i] == input_arr[i-1])) {
      if (i == input_arr.length - 1 && input_arr[i] == input_arr[i-1]) { data.stretches.push(new Stretch(data.currentStart, i, input_arr[i-1])) }
      else { data.stretches.push(new Stretch(data.currentStart, i - 1, input_arr[i-1])) }
      data.currentStart = i;
    };

  };

  for (var i = 0; i < data.stretches.length; i++) {
    if (data.stretches[i].length == 1) {
      data.stretches.splice(i, 1);
      i--;
    }
  };

  console.log(data)

  return data;
}


function Stretch(start, end, value) {
  this.start = start;
  this.end = end;
  this.length = this.end-this.start + 1;
  this.value = value;
  this.arr = new Array();
  for (var i = 0; i < this.length; i++) { this.arr.push(this.value) };

}


function display(output_data) {
  var doc_output = document.getElementById("output");
  var title = doc_output.insertRow(doc_output.rows.length);
  var title_str = "";
  for (var i = 0; i < output_data.raw.length; i++) {
    title_str += output_data.raw[i] + ", ";
  }
  var title_text = document.createTextNode(title_str);
  title.appendChild(title_text);
  title.setAttribute('align', 'center');
  title.setAttribute('width', '100%')

  for (var j = 0; j < output_data.stretches.length; i++, j++) {
    var i = doc_output.rows.length;
    var row = doc_output.insertRow(i);

    for (var x = 0; x < 4; x++) {
      var text;
      switch (x) {
        case 0:
          text = document.createTextNode(output_data.stretches[j].start);
          break;
        case 1:
          text = document.createTextNode(output_data.stretches[j].end);
          break;
        case 2:
          text = document.createTextNode(output_data.stretches[j].length);
          break;
        case 3:
          text = document.createTextNode(output_data.stretches[j].value);
          break;
      };

      var cell = row.insertCell(x);
      cell.appendChild(text);

      cell.setAttribute('align', 'center');
      cell.setAttribute('width', '25%')
    }
  }


}


function run() {
  var array = parse_array();
  display(array);
  // document.getElementById("input").value = "";


}
