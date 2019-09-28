//取元素
$(function() {
    var $submit = $('#sub');
    // var $username = $('.usersname').val();
    // var $password = $('.userspass').val();
    var userName = document.getElementsByClassName('usersname');
    var password = document.getElementsByClassName('userspass');
    var $errorinfo = $('#errorinfo');
    $submit.on('click', function() {
            console.log($('.usersname'))
            console.log($(userName).val())

            $.ajax({
                type: 'get',
                url: "../../php/login.php",
                data: {
                    username: $(userName).val(),
                    password: $(password).val()
                },
                dataType: "text",
                success: function(d) {
                    console.log(d)
                    if (d == 1) {
                        // alert('11111')
                        $(window).attr('location', '../html/index1.html');
                        $.session.set('successname', $username)
                    } else {

                        alert('用户名或者密码错误');


                    }

                }


            });
        })
        // tab切换
        ! function() {

            $('#tab .tab_title li').on('click', function() {
                $(this).addClass('active').siblings().removeClass('active');
                $('#tab .tab_content .item').eq($(this).index()).addClass('show123').siblings().removeClass('show123');
            })

        }();
});