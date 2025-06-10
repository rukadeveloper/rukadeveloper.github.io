export const groupByMonthAndDay = (data) => {
  return data.reduce((acc, item) => {
    if (!item.date || typeof item.date !== "string" || item.date.length < 10) {
      acc["기타"] = acc["기타"] || [];
      acc["기타"].push(item);
      return acc;
    }
    // 월 키
    const monthKey = item.date.slice(0, 7).replace("-", " ");
    // 일 키
    const dayKey = item.date.slice(0, 10); // "2025-04-01"
    // 월 그룹이 없으면 생성
    acc[monthKey] = acc[monthKey] || {};
    // 일 그룹이 없으면 생성
    acc[monthKey][dayKey] = acc[monthKey][dayKey] || [];
    // 일별로 데이터 추가
    acc[monthKey][dayKey].push(item);
    return acc;
  }, {});
};

export const getDayShort = (dateStr) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(dateStr);
  return days[date.getDay()];
};

export const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
