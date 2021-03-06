define(["jquery", "jquery-cookie"], function ($) {

    function download() {  
        $.ajax({
            type:"get",
            url:"../data/goodsList1.json",
            success:function (arr) {
                console.log(arr);
                $(`<div data-v-61428f58 class = 'section'>
                <div data-v-61428f58 class = 'components-list-box'>
                    <div data-v-a2d6c756 class="channel-product-imgText">
                        <div data-v-a2d6c756 class = 'channel-product-top'>
                            <div data-v-a2d6c756 class = 'product-cell shadow product_with_tag product_tag_1'>
                                <div data-v-a2d6c756 class = 'figure'>
                                    <a href="goodsDesc.html?product_id=${arr[0].product_id}">
                                        <img data-v-a2d6c756 style = 'background-color: rgb(178, 184, 205);' src="${arr[0].image}" alt=""/>
                                    </a>
                                </div>
                                <div data-v-a2d6c756 class = 'content'>
                                    <h3 data-v-a2d6c756 class = 'title'>
                                        <a data-v-a2d6c756 href="#">
                                            ${arr[0].name}
                                        </a>
                                    </h3>
                                    <p data-v-a2d6c756 class = 'desc'>${arr[0].desc}</p>
                                    <p data-v-a2d6c756 class = 'price'>
                                        <strong data-v-a2d6c756>${arr[0].price}</strong>元
                                        <span data-v-a2d6c756>起</span>
                                        <del data-v-a2d6c756>${arr[0].del}元</del>
                                    </p>
                                    <p data-v-a2d6c756 class = 'link'>
                                        <a data-v-a2d6c756 href="#">立即购买</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 分割线 -->
                <div data-v-61428f58 class = 'section'>
                    <div data-v-61428f58 class = 'components-list-box'>
                        <div data-v-4a0c734d class = 'channel-line' style = 'background-color: rgb(245, 245, 245); height: 14px;'></div>
                    </div>
                </div>`).appendTo('#star')

                //创建大图下面的小图
                //每一行有两个
                for(var i=1;i<arr.length;i++){
                    //从下标1开始是因为下标0是上面的大图
                    //先生成每一行  一开始就要先创建一行
                    if ( i % 2 != 0) {
                         var row = $(`
                    <div data-v-61428f58 class = 'section'>
                        <div data-v-61428f58 class = 'components-list-box'>
                            <div data-v-45ef62b1 class = 'channel-product channel-product-two4'>
                                <div data-v-45ef62b1 class = 'row'>
                                
                                </div>
                            </div>
                        </div>
                    </div> `);
                    row.appendTo('#star');
                    }
                   //每一行创建了然后往里面插两列的数据
                   $(`
                   <div data-v-45ef62b1 class = 'span10 product-cell shadow'>
                                    <div data-v-45ef62b1 class = 'figure'>
                                        <a data-v-45ef62b1 href="goodsDesc.html?product_id=${arr[i].product_id}" class = 'exposure'>
                                            <img data-v-45ef62b1 style = 'background-color: rgb(189, 193, 217);' src="${arr[i].image}" alt=""/>
                                        </a>
                                    </div>
                                    <h3 data-v-45ef62b1 class = 'title'>
                                        <a data-v-45ef62b1 href="goodsDesc.html?product_id=${arr[i].product_id}">${arr[i].name}</a>
                                    </h3>
                                    <p data-v-45ef62b1 class = 'desc'>${arr[i].desc}</p>
                                    <p data-v-45ef62b1 class = 'price'>
                                        <strong data-v-45ef62b1>${arr[i].price}</strong>元
                                        <span data-v-45ef62b1>起</span>
                                        <del data-v-45ef62b1>${arr[i].price}元</del>
                                    </p>
                                </div>
                   `).appendTo(row.find('.row'));
                }
              },
            error:function (msg) {
                console.log(msg);
                
              }
        })
    }




    

    


    return {
        download
    }
});