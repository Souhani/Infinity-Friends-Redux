import filterRobots from './FilterRobots';

it('filter robots works correctly', () => {
    const mockRobots = [{
        id:1,
        firstName:'ali',
        lastName:'ahmed'
    },
    {
        id:2,
        firstName:'sara',
        lastName:'ley'
    }];
    expect.assertions(3);
      expect(filterRobots(mockRobots,'non')).toEqual([]);
      expect(filterRobots(mockRobots,'ali')).toEqual([{
        id:1,
        firstName:'ali',
        lastName:'ahmed'
      }]);
      expect(filterRobots(mockRobots,'ley')).toEqual([{
        id:2,
        firstName:'sara',
        lastName:'ley'
    }]);

});