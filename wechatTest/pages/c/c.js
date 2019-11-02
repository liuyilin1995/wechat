// pages/c/c.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age: 20,
    user: [
      { name: "张三", age: 50, sex: "男" },
      { name: "张a", age: 50, sex: "男" },
      { name: "张d", age: 50, sex: "男" },
      { name: "张c", age: 50, sex: "男" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options);
    setTimeout(() => {
      this.setData(
        { age: 10 }
      )
    }, 2000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})