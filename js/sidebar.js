let menuItem = [
  {
    type: "group",
    icon: 'category',
    label: "資產註冊管理",
    child: [
      { label: '註冊資產清單', icon: "format_list_bulleted", link: './CP2.3_assets-list.html' },
      { label: '資產審核', icon: "grading", link: './CP2.4_assets-review.html' },
      { label: '註冊資產', icon: "edit", link: './CP2.1_register-assets.html' },
      { label: '批次註冊', icon: "drive_folder_upload", link: './CP2.2_batch-register.html' },
    ]
  },
  {
    type: "group",
    icon: 'store',
    label: "商品上架管理",
    child: [
      { label: '上架清單', icon: "format_list_bulleted", link: './CP3.1_selling-list.html' },
      { label: '上架審核', icon: "grading", link: './CP3.2_selling-review.html' },
    ]
  },
  {
    type: "group",
    icon: 'shopping_bag',
    label: "訂單管理",
    child: [
      { label: '訂單總覽', icon: "grading", link: './CP4.1_order-list.html' },
      { label: '物流訂單一覽', icon: "local_shipping", link: './CP4.2_logistics-list.html' },
      { label: '營收資訊', icon: "paid", link: './CP4.3_order-report.html' },
    ]
  },
  {
    type: "group",
    icon: 'support_agent',
    label: "客服管理 P2",
    child: [
      { label: '退貨申請', icon: "person", link: './CP6.1_refund.html' },
      // { label: '黑名單', icon: "account_balance_wallet", link: './CP5.2_receiving-account.html' },
      // { label: '發票設定(P2)',  icon: "account_balance_wallet", link: './' },
    ]
  },
  {
    type: "group",
    icon: "settings",
    label: "後台設定 P2",
    child: [
      { label: '個人資訊', icon: "person", link: './CP5.1_account-setting.html' },
      { label: '收款帳戶', icon: "account_balance_wallet", link: './CP5.2_receiving-account.html' },
      { label: '帳號管理', icon: "manage_accounts", link: './CP5.3_account-manage.html' },
      // { label: '發票設定(P2)',  icon: "account_balance_wallet", link: './' },
    ]
  },
  // {
  //   type: "item",
  //   label: "客服管理(P2)",
  //   link: ""
  // },
  // {
  //   type: "item",
  //   label: "黑名單(P2)",
  //   link: ""
  // },
]



// Opens the sidebar menu
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#header").toggleClass("active");
  $("#sidebar-wrapper").toggleClass("expand");
  $(".overlay").toggleClass("show");
});

$(".overlay").click(function (e) {
  e.preventDefault();
  $("#header").toggleClass("active");
  $("#sidebar-wrapper").toggleClass("expand");
  $("#menu-close").toggleClass("show");
  $(".overlay").toggleClass("show");
});

// Initialize tooltip component
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
// Initialize popover component
$(function () {
  $('[data-toggle="popover"]').popover();
})


//  頁面開啟時 menu 標示出目前頁面
function currentPage(str) {
  // if(idx) {
  //   let item = $('#sidebar li').eq(group-1).find('li').eq(idx-1);
  //   $('#sidebar li').eq(group-1).addClass('active')
  //   item.children().addClass('active')
  // } else {
  //   $('#sidebar li').eq(group-1).addClass('active')
  // }
  let item = $('#sidebar a').each(function () {
    let name = this.outerText.split(' ')
    if (name.length < 2) {
      name = this.outerText.split('\n')[1]
    }else {
      name = name[1]
    }
    // console.log(name, str)
    if (name === str) {
      $(this).addClass('active')
      $(this).parents('.menu-group').addClass('active')
      $(this).parents('.menu-group').addClass('active expand')
      $(this).parents('.menu-item').addClass('active')
    }
  });

}



// 產出 sidebar 的選單
for (i = 0; i < menuItem.length; i++) {
  let item = menuItem[i];
  if (menuItem[i].type === "item") {
    $("#sidebar").append(`
      <li class="menu-item animated fadeIn" data-status="${item.active}">
        <a href="${item.link}" class="d-block">
          <span class="material-icons">${item.icon}</span>
          ${item.label}
        </a>
      </li>
    `)
  }
  if (menuItem[i].type === "group") {
    let subItemGroup = "";

    $.each(item.child, function (key, value) {
      subItemGroup += `
      <li>
        <a class="menu-item animated fadeIn" data-status="${value.active}" href="${value.link}">
          <span class="material-icons">${value.icon}</span>
          ${value.label}
        </a>
      </li>
      `
    });
    $("#sidebar").append(`
      <li class="menu-group animated fadeIn" data-status="${item.active}">
        <label>
          <span class="material-icons">${item.icon}</span>
          ${item.label}
          <span class="material-icons folder-arrow">expand_less</span>
        </label>
        <ul>
          ${subItemGroup}
        </ul>
      </li>    
    `)
  }
}




$(".menu-group").each(function (index) {
  $(this).on("click", function () {
    $(this).toggleClass("expand")

  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// 判斷裝置

function whatDevice() {
  var mobileDevices = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
  var isMobileDevice = false

  for (var i = 0; i < mobileDevices.length; i++) {
    if (navigator.userAgent.match(mobileDevices[i])) {
      isMobileDevice = true

      document.getElementById('main-content').classList.add('mobile')
    }
  }
  // console.log(navigator.userAgent)
  return isMobileDevice
}

whatDevice()

