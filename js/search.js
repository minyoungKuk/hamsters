let params = new URLSearchParams(window.location.search) // 주소창 주소 가져오기
let keyword = params.get('keyword'); // 주소의 keyword 값 가져오기
$('.search-text-value').append(keyword); // html에 keyword 값 추가

const apiKey = '4c329d16b4a318497a30199297839bb6';