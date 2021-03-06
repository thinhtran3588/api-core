"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntityById = void 0;

var _helpers = require("../helpers");

const getEntityById = ({
  query,
  repository,
  validatePermissions
}) => (0, _helpers.validateId)(query).then(repository.getById).then(entity => validatePermissions ? validatePermissions(entity).then(() => entity) : Promise.resolve(entity));

exports.getEntityById = getEntityById;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9nZXQtZW50aXR5LWJ5LWlkLnRzIl0sIm5hbWVzIjpbImdldEVudGl0eUJ5SWQiLCJxdWVyeSIsInJlcG9zaXRvcnkiLCJ2YWxpZGF0ZVBlcm1pc3Npb25zIiwidGhlbiIsImdldEJ5SWQiLCJlbnRpdHkiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVPLE1BQU1BLGFBSUcsR0FBRyxDQUFDO0FBQUNDLEVBQUFBLEtBQUQ7QUFBUUMsRUFBQUEsVUFBUjtBQUFvQkMsRUFBQUE7QUFBcEIsQ0FBRCxLQUNqQix5QkFBK0JGLEtBQS9CLEVBQ0dHLElBREgsQ0FDUUYsVUFBVSxDQUFDRyxPQURuQixFQUVHRCxJQUZILENBRVNFLE1BQUQsSUFBYUgsbUJBQW1CLEdBQUdBLG1CQUFtQixDQUFDRyxNQUFELENBQW5CLENBQTRCRixJQUE1QixDQUFpQyxNQUFNRSxNQUF2QyxDQUFILEdBQW9EQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JGLE1BQWhCLENBRjVGLENBTEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7RW50aXR5LCBHZXRCeUlkUXVlcnksIFJlYWRSZXBvc2l0b3J5LCBXcml0ZVJlcG9zaXRvcnl9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHt2YWxpZGF0ZUlkfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IGdldEVudGl0eUJ5SWQ6IDxJZCA9IHN0cmluZywgRSBleHRlbmRzIEVudGl0eTxJZD4gPSBFbnRpdHk8SWQ+PihwYXJhbXM6IHtcbiAgcXVlcnk6IEdldEJ5SWRRdWVyeTxJZD47XG4gIHJlcG9zaXRvcnk6IFJlYWRSZXBvc2l0b3J5PElkLCBFPiB8IFdyaXRlUmVwb3NpdG9yeTxJZCwgRT47XG4gIHZhbGlkYXRlUGVybWlzc2lvbnM/OiAoZW50aXR5OiBFKSA9PiBQcm9taXNlPHZvaWQ+O1xufSkgPT4gUHJvbWlzZTxFPiA9ICh7cXVlcnksIHJlcG9zaXRvcnksIHZhbGlkYXRlUGVybWlzc2lvbnN9KSA9PlxuICB2YWxpZGF0ZUlkPHR5cGVvZiBxdWVyeVsnaWQnXT4ocXVlcnkpXG4gICAgLnRoZW4ocmVwb3NpdG9yeS5nZXRCeUlkKVxuICAgIC50aGVuKChlbnRpdHkpID0+ICh2YWxpZGF0ZVBlcm1pc3Npb25zID8gdmFsaWRhdGVQZXJtaXNzaW9ucyhlbnRpdHkpLnRoZW4oKCkgPT4gZW50aXR5KSA6IFByb21pc2UucmVzb2x2ZShlbnRpdHkpKSk7XG4iXX0=