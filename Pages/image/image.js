// Pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  imageLoad() {
    console.log('图片已被加载')
  },
  onkey(event) {
    console.log('按下了键盘',event)
  },
  onfocus(event) {
    console.log('获得焦点',event)
  },
  onblur(event) {
    console.log('失去了焦点',event)
  },
  imageClick() {
    wx.chooseImage({
      success: (res) => {
        console.log(res)
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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