export default [
  {
    id: 'move',
    shape: 'slot',
    category: 'motion',
    draggable: true,
    display: {
      space: 8
    },
    sections: [
      {
        type: 'text',
        text: '移动'
      },
      {
        type: 'argument',
        datatype: 'number',
        value: '1'
      },
      {
        type: 'text',
        text: '步'
      }
    ],
    exports: {
      json: function (elem) {
        return {}
      }
    }
  }
]
