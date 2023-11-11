function filterRobots(robots, searchField) {
  return robots?.filter((robot) => {
    return (
      robot?.firstName?.toLowerCase().includes(searchField?.toLowerCase()) ||
      robot?.lastName?.toLowerCase().includes(searchField?.toLowerCase())
    );
  });
}

export default filterRobots;
