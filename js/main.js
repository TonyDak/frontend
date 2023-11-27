/* PRODUCT*/
createProduct();
createAdmin();
function currency(num) {

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
function createProduct() {
  if (localStorage.getItem('product') == null) {
    var productArray = [
      {
        id: "1",
        type: "svt",
        name: "18.12 Man Made Clay",
        price: "530000",
        brand: "18.12 Man Made",
        capacity: "56g",
        detail: `Độ giữ nếp: Firm Hold<br>
                          Mùi Hương: Sweet Tobacco<br>
                          Độ bóng: Tự nhiên`,
        img: "https://clmensstore.com/wp-content/uploads/2018/07/21-e1637565314328.jpg",
      },
      {
        id: "2",
        type: "svt",
        name: "18.12 Man Made Paste",
        price: "530000",
        brand: "18.12 Man Made",
        capacity: "56g",
        detail: `Độ giữ nếp: Medium Hold<br>
                  Mùi Hương: Sweet Tobacco<br>
                  Độ bóng: Tự nhiên`,
        img: "https://clmensstore.com/wp-content/uploads/2019/09/pastev2_800x_d3eb1e7fb378479495eab05f5a6e8b5a-e1634378827191.jpg",
      },
      {
        id: "3",
        type: "svt",
        name: "18.12 Man Made Wax",
        price: "530000",
        brand: "18.12 Man Made",
        capacity: "56g",
        detail: `Độ giữ nếp: High Hold<br>
                  Mùi Hương: Sweet Tobacco<br>
                  Độ bóng: Tự nhiên`,
        img: "https://clmensstore.com/wp-content/uploads/2018/07/Untitled-1-e1637565221761.jpg",
      },
      {
        id: "4",
        type: "svt",
        name: "Volcanic Clay",
        price: "280000",
        brand: "Apestomen",
        capacity: "80ml",
        detail: `Độ giữ nếp: High - Strong Hold<br>
                  Mùi Hương: Epic Honeydew<br>
                  Độ bóng: Không`,
        img: "https://clmensstore.com/wp-content/uploads/2013/06/222222222-e1616486694586-768x576.jpg",
      },
      {
        id: "5",
        type: "svt",
        name: "Nitro Wax",
        price: "530000",
        brand: "Apestomen",
        capacity: "80ml",
        detail: `Độ giữ nếp: Strong Hold<br>
                  Mùi Hương: Mùi mỹ phẩm<br>
                  Độ bóng: Mờ`,
        img: "https://clmensstore.com/wp-content/uploads/2013/06/3123-e1616486692924-768x576.jpg",
      },
      {
        id: "6",
        type: "svt",
        name: "Blumaan Cavalier Clay",
        price: "449000",
        brand: "Blumaan",
        capacity: "74ml",
        detail: `Độ giữ nếp: Heavy Hold<br>
                  Mùi Hương: Kẹo sữa<br>
                  Độ bóng: Không`,
        img: "https://clmensstore.com/wp-content/uploads/2017/07/s-p-blumaan-cavalier-clay-ch-nh-h-ng-2-1.jpg",
      },
      {
        id: "7",
        type: "svt",
        name: "Blumaan Monarch Matte Paste",
        price: "499000",
        brand: "Blumaan",
        capacity: "74ml",
        detail: `Độ giữ nếp: High Hold<br>
                  Mùi Hương: Nước hoa<br>
                  Độ bóng: Không`,
        img: "https://clmensstore.com/wp-content/uploads/2017/07/sap-blumaan-su-tu-monarch-matte-paste-chinh-hang-fremen-store-4.jpg",
      },
      {
        id: "8",
        type: "svt",
        name: "Blumaan Original Styling Meraki",
        price: "499000",
        brand: "Blumaan",
        capacity: "74ml",
        detail: `Độ giữ nếp: High Hold<br>
                  Mùi Hương: Bạc hà<br>
                  Độ bóng: Tự nhiên`,
        img: "https://clmensstore.com/wp-content/uploads/2017/07/meraki1_1200x630-510x510-1.jpg",
      },
      {
        id: "9",
        type: "svt",
        name: "Arcadian Travel Clay Pomade",
        price: "280000",
        brand: "Arcadian Grooming",
        capacity: "56g",
        detail: `Độ giữ nếp: High Hold<br>
                  Mùi Hương: Gỗ, hương trầm, thảo mộc<br>
                  Độ bóng: Mờ`,
        img: "https://clmensstore.com/wp-content/uploads/2020/05/Travel_Clay_700x-1.png",
      },
      {
        id: "10",
        type: "svt",
        name: "Arcadian Clay Rum",
        price: "400000",
        brand: "Arcadian Grooming",
        capacity: "115g",
        detail: `Độ giữ nếp: High Hold<br>
                  Mùi Hương: Gỗ, hương trầm, thảo mộc<br>
                  Độ bóng: Mờ`,
        img: "https://clmensstore.com/wp-content/uploads/2019/09/7d3f0a111f8c04d09e907c52faced8c8.jpg",
      },
      {
        id: "11",
        type: "svt",
        name: "Arcadian Travel Matte Paste",
        price: "280000",
        brand: "Arcadian Grooming",
        capacity: "56g",
        detail: `Độ giữ nếp: Heavt Hold<br>
                  Mùi Hương: Gỗ, Oakmoss, Cirtus<br>
                  Độ bóng: Mờ`,
        img: "https://clmensstore.com/wp-content/uploads/2020/05/Arcadian-Matte-Paste-Travel_size-768x768.png",
      },
      {
        id: "12",
        type: "svt",
        name: "Arcadian Holy Shiitake Texture Cream",
        price: "550000",
        brand: "Arcadian Grooming",
        capacity: "115g",
        detail: `Độ giữ nếp: Firm Hold<br>
                  Mùi Hương: Vanilla Cedar<br>
                  Độ bóng: Không`,
        img: "https://clmensstore.com/wp-content/uploads/2022/03/HolyShiitake2021_1600x-768x768.jpg",
      },
      {
        id: "13",
        type: "svt",
        name: "Arcadian Matte Paste & Vanilla Cedar",
        price: "500000",
        brand: "Arcadian Grooming",
        capacity: "114g",
        detail: `Độ giữ nếp: Heavy Hold<br>
                  Mùi Hương: Vanilla Cedar<br>
                  Độ bóng: Mờ`,
        img: "https://clmensstore.com/wp-content/uploads/2021/12/VanillaCedarClayPomade_600x600_crop_center-copy.jpg",
      },
      {
        id: "14",
        type: "svt",
        name: "Arcadian Rosa Styling Clay",
        price: "360000",
        brand: "Arcadian Grooming",
        capacity: "114g",
        detail: `Độ giữ nếp: Firm Hold<br>
                  Mùi Hương: Dầu hoa hồng, cam Bergamot<br>
                  Độ bóng: Không`,
        img: "https://clmensstore.com/wp-content/uploads/2021/02/RosaFront_700x.jpg",
      },
      {
        id: "16",
        type: "btp",
        name: "Bột tạo phồng Dapper Dan Texture Dust",
        price: "350000",
        brand: "Dapper Dan",
        capacity: "20g",
        detail: `Độ giữ nếp: Nhẹ nhàng, linh hoạt<br>
                  Mùi Hương: Citrus<br>
                  Hiệu năng: Dễ dàng gội rửa`,
        img: "https://clmensstore.com/wp-content/uploads/2020/01/Dapper-Dan-Texture-Dust-768x768.png",
      },
      {
        id: "17",
        type: "btp",
        name: "Bột tạo phồng Forte Series Texture Powder",
        price: "490000",
        brand: "Forte Series",
        capacity: "5g",
        detail: `Độ giữ nếp: Medium Hold<br>
                Hương thơm: Nước hoa<br>
                Hiệu năng: Khô, hút dầu tốt. Tăng độ dày cho tóc, dễ dàng gội rửa
                `,
        img: "https://clmensstore.com/wp-content/uploads/2022/08/powder_WB_REF_2048x2048-copy-768x768.jpg",
      },
      {
        id: "18",
        type: "btp",
        name: "Bột tạo phồng Reuzel Matte Texture Powder",
        price: "380000",
        brand: "Reuzel Grooming",
        capacity: "15g",
        detail: `Độ giữ nếp: High Hold<br>
                Hương thơm: Nước hoa<br>
                Hiệu năng: Khô tự nhiên và độ phồng cao, dễ dàng gội rửa
                `,
        img: "https://clmensstore.com/wp-content/uploads/2020/02/reuzel-matte-texture-powde-768x776.jpg",
      },
      {
        id: "19",
        type: "btp",
        name: "Bột tạo phồng Arcadian Texture Powder",
        price: "340000",
        brand: "Arcadian Grooming",
        capacity: "30g",
        detail: `Độ giữ nếp: Light Hold <br>
                Hương thơm: Trái cây<br>
                Hiệu năng: Bột rất mịn và vô cùng dễ gội rửa
                `,
        img: "https://clmensstore.com/wp-content/uploads/2021/03/TexturePowder_800x-768x768.jpg",
      },
      {
        id: "20",
        type: "btp",
        name: "Bột tạo phồng Dauntless Texture Powder",
        price: "310000",
        brand: "Dauntless Grooming",
        capacity: "28g",
        detail: `Độ giữ nếp: Light – Medium<br>
                Hương thơm: Nước hoa Fearless<br>
                Hiệu năng: Cung cấp kết cấu, độ phồng và lớp nền mờ khô
                `,
        img: "https://clmensstore.com/wp-content/uploads/2021/02/Untitled-1-3-e1613540337230-768x577.jpg",
      },
      {
        id: "21",
        type: "btp",
        name: "Bột tạo phồng Pacinos Texture Powder",
        price: "420000",
        brand: "Pacinos",
        capacity: "8g",
        detail: `Độ giữ nếp: Light Hold <br>
                Hương thơm: Không<br>
                Hiệu năng: Kiểm soát dầu tốt trên tóc, tăng phồng, tăng texture
                `,
        img: "https://clmensstore.com/wp-content/uploads/2021/10/bot-tao-phong-pacinos-1-1-768x768.png",
      },
      {
        id: "22",
        type: "psl",
        name: "Bona Fide Texture Spray",
        price: "355000",
        brand: "Bona Fide",
        capacity: "250ml",
        detail: `Độ kết dính: Tốt<br>
                Hương thơm: Bưởi và Cam<br>
                Hiệu năng: Hỗ trợ tăng độ phồng (Volume) và tăng lọn tóc (Texture). Hỗ trợ bảo vệ nhiệt khi dùng máy sấy. Hỗ trợ tăng độ liên kết tóc. Giúp sáp bám vào tóc dễ dàng hơn.
                `,
        img: "https://clmensstore.com/wp-content/uploads/2017/12/bona-fide-texture-spray-2022-768x768.jpg",
      },
      {
        id: "23",
        type: "psl",
        name: "Apestomen Salty Ape Sea Salt Spray",
        price: "280000",
        brand: "Apestomen",
        capacity: "200ml",
        detail: `Độ giữ nếp: Low - Medium Hold <br>
                Hương thơm: Nước hoa Aqueous Cologne<br>
                Hiệu năng: Hỗ trợ tăng độ phồng (Volume) và tăng lọn tóc (Texture). Hỗ trợ bảo vệ nhiệt khi dùng máy sấy. Hỗ trợ tăng độ liên kết tóc. Giúp sáp bám vào tóc dễ dàng hơn.
                `,
        img: "https://clmensstore.com/wp-content/uploads/2021/06/xit-salty-apes-salt-spray-copy-e1623588699989-768x648.jpg",
      },
      {
        id: "24",
        type: "psl",
        name: "Arcadian Texture Spray",
        price: "500000",
        brand: "Arcadian Grooming",
        capacity: "236ml",
        detail: `Độ giữ nếp: Low - Medium Hold <br>
                Hương thơm: nước hoa<br>
                Hiệu năng: Hỗ trợ tăng độ phồng (Volume) và tăng lọn tóc (Texture). Hỗ trợ bảo vệ nhiệt khi dùng máy sấy. Hỗ trợ tăng độ liên kết tóc. Giúp sáp bám vào tóc dễ dàng hơn.
                `,
        img: "https://clmensstore.com/wp-content/uploads/2022/10/Thiet-ke-chua-co-ten-5-768x768.png",
      },
      {
        id: "25",
        type: "psl",
        name: "By Vilain Neon Sea Salt Foam",
        price: "449000",
        brand: "By Vilain",
        capacity: "150ml",
        detail: `Độ giữ nếp: Low - Medium Hold <br>
                 Hương thơm: nước hoa<br>
                Hiệu năng: Dung dịch lỏng với đầu hỗ trợ tạo bọt cực kì tốt. Hỗ trợ tạo độ phồng cực kì tốt. Bảo vệ nhiệt lên đến (300 độ C) từ máy sấy. Cung cấp lượng Texture cực kì nhiều.
                `,
        img: "https://clmensstore.com/wp-content/uploads/2020/05/neon_front-768x768.png",
      },
      {
        id: "26",
        type: "psl",
        name: "By Vilain SideKick",
        price: "429000",
        brand: "By Vilain",
        capacity: "155ml",
        detail: `Độ giữ nếp: Firm Hold<br>
                Mùi hương: thơm nhẹ, dạng mỹ phẩm<br>
                Hiệu năng: Bảo vệ nhiệt, tăng độ phồng, tăng texture, giúp tóc vào nếp dễ hơn. Chống được dầu trên tóc, tạo ra độ khô nhất định
                `,
        img: "https://clmensstore.com/wp-content/uploads/2017/04/sidekick_front-e1636609594578-768x784.png",
      },
      {
        id: "27",
        type: "psl",
        name: "By Vilain Sidekick Zero",
        price: "429000",
        brand: "By Vilain",
        capacity: "155ml",
        detail: `Độ giữ nếp: Medium Hold <br>
                 Hương thơm: Không mùi<br>
                Hiệu năng: Bảo vệ nhiệt, tăng độ phồng, tăng texture, giúp tóc vào nếp dễ hơn.
                `,
        img: "https://clmensstore.com/wp-content/uploads/2018/03/sidekick_zero_front.jpg",
      },
      {
        id: "28",
        type: "psl",
        name: "Dapper Dan Sea Salt Spray",
        price: "450000",
        brand: "Dapper Dan",
        capacity: "200ml",
        detail: `Độ giữ nếp: Medium Hold <br>
                 Hương thơm: Gỗ đàn hương<br>
                Hiệu năng: Cung cấp một kết thúc mờ tự nhiên, kết cấu để giữ kiểu tóc của bạn tại chỗ. Tạo độ dày, độ phồng và giữ nếp tuyệt vời.
                `,
        img: "https://clmensstore.com/wp-content/uploads/2020/02/DapperDan-Sea-Salt-Spray-768x814.png",
      },
      {
        id: "29",
        type: "psl",
        name: "Forte Series Sea Salt Spray",
        price: "400000",
        brand: "Forte Series",
        capacity: "118ml",
        detail: `Độ giữ nếp: Low Hold<br>
                 Hương thơm: Hương biển<br>
                Hiệu năng: Hỗ trợ giữ nếp nhẹ, tăng độ phồng tóc tối đa, tăng kết cấu lọn tóc.
                `,
        img: "https://clmensstore.com/wp-content/uploads/2021/05/sprayshopifygradient_2048x2048-e1622277794667-768x576.jpg",
      },
      {
        id: "30",
        type: "psl",
        name: "Forte Series Thickening Spray",
        price: "530000",
        brand: "Forte Series",
        capacity: "118ml",
        detail: `Độ giữ nếp: Low Hold<br>
                 Hương thơm: Hương biển<br>
                Hiệu năng: Hỗ trợ giữ nếp nhẹ, tăng độ phồng tóc tối đa, tăng kết cấu lọn tóc. Làm dày tóc khi sử dụng
                `,
        img: "https://clmensstore.com/wp-content/uploads/2021/11/thickeningspraygradient_600x600.png",
      },
      {
        id: "31",
        type: "psl",
        name: "Reuzel Clay Spray",
        price: "399000",
        brand: "Reuzel Grooming",
        capacity: "335ml",
        detail: `Độ giữ nếp: Medium Hold<br>
                 Hương thơm: Trái cây nhẹ<br>
                Hiệu năng: Hỗ trợ kiểm soát mái tóc. Tăng thêm độ phồng và kết cấu lọn tóc. Dễ dàng gội rửa
                `,
        img: "https://clmensstore.com/wp-content/uploads/2021/12/reuzel-clay-spray_c82dc835afd44a648e7d7148db8c18aa_master-768x768.jpg",
      },
      {
        id: "32",
        type: "psl",
        name: "Reuzel Spray Grooming Tonic",
        price: "375000",
        brand: "Reuzel Grooming",
        capacity: "335ml",
        detail: `Độ giữ nếp: Medium Hold<br>
                 Hương thơm: Trái cây nhẹ<br>
                Hiệu năng: Cấp ẩm nhẹ. Bảo vệ khỏi nhiệt độ máy sấy. Hỗ trợ kiểm soát mái tóc. Tăng thêm độ phồng và kết cấu lọn tóc. Dễ dàng gội rửa
                `,
        img: "https://clmensstore.com/wp-content/uploads/2019/07/Reuzel-Grooming-Tonic-Spray-1-768x800.jpg",
      },
      {
        id: "33",
        type: "dgx",
        name: "18.21 Man Made Wash",
        price: "585000",
        brand: "18.21 Man Made",
        capacity: "532ml",
        detail: `Sữa tắm đa năng của 18.21 Man Made là xà phòng không chứa paraben, không chứa sulfat, được pha với Macadamia Glycerides, Hydrolyzed Quinoa và Hydrolyzed Jojoba Esters bổ sung protein và lấp đầy hư tổn cho lớp vỏ của tóc bạn. Nó được cân bằng độ PH để giúp làn da của bạn khỏe mạnh và được bảo vệ chống lại các gốc tự do.
                 Hương thơm: Sweet Tobacco<br>
                Hiệu năng: Làm sạch và dưỡng ẩm. Tăng sức khỏe của tóc.
                `,
        img: "https://clmensstore.com/wp-content/uploads/2018/07/Wash_AbsoluteMahogany_18oz_NEW_V3_1800x1800-768x768.jpg",
      },
      {
        id: "34",
        type: "dgx",
        name: "Dầu gội Black Clay Shampoo",
        price: "500000",
        brand: "SHEHVOO",
        capacity: "250ml",
        detail: `Dầu gội ShehVoo Black Clay Shampoo là một loại dầu gội tự nhiên mang lại hiệu quả cao được thiết kế để củng cố và nuôi dưỡng tóc yếu, dễ gẫy rụng. Công thức độc đáo của chúng tôi sẽ cung cấp cho tóc bạn những thành phần mang lại hiệu quả cao để làm cho tóc bạn dày hơn, đầy đặn, mượt mà rõ rệt.
                 Hương thơm: Sweet Tobacco<br>
                Hiệu năng: Làm sạch và dưỡng ẩm. Tăng sức khỏe của tóc. Gội, xả và dưỡng.
                `,
        img: "https://clmensstore.com/wp-content/uploads/2021/03/black-shampoo-768x734.jpg",
      },
      {
        id: "34",
        type: "dgx",
        name: "Dầu gội – xả Activating Oil Cleanser",
        price: "420000",
        brand: "SHEHVOO",
        capacity: "118ml",
        detail: `Dầu gội – xả Activating Oil Cleanser cung cấp những dưỡng chất cần thiết cho mái tóc của bạn và loại bỏ những tạp chất, bụi bẩn làm hại mái tóc.Giúp tóc khỏe và chắc hơn thông qua quá trình được nuôi dưỡng với các thành phần cao cấp
                Hiệu năng: Làm sạch, dưỡng ẩm sâu. Gội, xả và dưỡng.
                `,
        img: "https://clmensstore.com/wp-content/uploads/2021/12/shehvooProductIm1ageAOCAmazon3D1-768x768.jpg",
      },
      {
        id: "35",
        type: "dgx",
        name: "Dầu gội Bona Fide",
        price: "450000",
        brand: "Bona Fide",
        capacity: "500ml",
        detail: `Dầu gội Bona Fide là dầu gội không chứa chất bảo quản Paraben gây hại cho tóc và da đầu. Đi kèm với tông mùi rất mát mẻ của hương Citrus rất phù hợp với trời nóng ở Việt Nam.
                Mùi hương: Citrus <br>
                Hiệu năng: Cấp ẩm, kích thích mọc tóc, phục hồi tóc hư tổn
                `,
        img: "https://clmensstore.com/wp-content/uploads/2018/07/BONA-FIDE-SHAMPOO-768x792.jpg",
      },
      {
        id: "36",
        type: "dgx",
        name: "Dầu xả Bona Fide",
        price: "450000",
        brand: "Bona Fide",
        capacity: "500ml",
        detail: `Dầu xả Bona Fide là dầu xả không chứa chất bảo quản Paraben gây hại cho tóc và da đầu. Đi kèm với tông mùi rất mát mẻ của hương Citrus rất phù hợp với trời nóng ở Việt Nam.
                Mùi hương: Citrus <br>
                Hiệu năng: Cấp ẩm, kích thích mọc tóc, phục hồi tóc hư tổn
                `,
        img: "https://clmensstore.com/wp-content/uploads/2018/07/BONA-FIDE-CONDITIONER-768x796.jpg",
      },
      {
        id: "37",
        type: "dgx",
        name: "Dầu gội Davines PURIFYING – Đặc trị gàu",
        price: "320000",
        brand: "Davines",
        capacity: "250ml",
        detail: `Dầu gội Davines PURIFYING là dầu xả không sử dụng Paraben & Sulfate, các thành phần thiết yếu sẽ giúp tóc và da đầu khỏe mạnh, chống lại các cuộc tấn công của vi khuẩn và gàu, thiết lập một môi trường lành mạnh cho sự phát triển của tóc
                Hiệu năng: Làm sạch, trị gàu, dưỡng
                `,
        img: "https://clmensstore.com/wp-content/uploads/2020/07/71161_NATURALTECH_PURIFYING_Shampoo_250ml_Davines_2000x.jpg",
      },
      {
        id: "38",
        type: "dgx",
        name: "Dầu gội Davines Rebalancing – Cân bằng dầu trên tóc",
        price: "345000",
        brand: "Davines",
        capacity: "250ml",
        detail: `Dầu gội Davines Rebalancing là dầu xả không sử dụng Paraben & Sulfate; chống lại các cuộc tấn công của vi khuẩn và gàu; chống Oxy hóa, tác dụng làm se và làm dịu các tuyến mồ hôi của da; cân bằng lại các tuyến mồ hôi, bã nhờn; giúp da đầu hạn chế tiết ra nhiều dầu trên tóc.
                Hiệu năng: Làm sạch, cân bằng dầu, dưỡng
                `,
        img: "https://clmensstore.com/wp-content/uploads/2020/09/71265_NATURALTECH_REBALANCING_Shampoo_250ml_Davines_jpg_2000x-1-768x767.jpg",
      },
      {
        id: "39",
        type: "dgx",
        name: "Dầu gội Davines Renewing – Chống lão hóa tóc",
        price: "330000",
        brand: "Davines",
        capacity: "250ml",
        detail: `Dầu gội Davines Renewing là dầu xả không sử dụng Paraben & Sulfate; bảo vệ da dầu chống lại các nguyên nhân làm lão hóa; giúp tăng độ mềm, bóng cho tóc; giúp kích thước của tóc cho bạn mái tóc chắc khỏe và dày hơn; 
                Hiệu năng: Làm sạch, chống lão hóa, dưỡng
        `,
        img: "https://clmensstore.com/wp-content/uploads/2022/07/Renew-goi-768x768.png",
      },
      {
        id: "40",
        type: "ddt",
        name: "The Original Hair Tonic",
        price: "280000",
        brand: "CL MEN'S GROOMING",
        capacity: "100ml",
        detail: `Mùi hương: Hoa cúc, hoa oải hương và gỗ đàn hương
                Hiệu năng: Dưỡng tóc bằng những dầu nền cần thiết cho tóc như Argan, Jojoba, Dầu hạt nho, Dầu Castor v..v; Kích thích mọc tóc bởi tinh dầu bưởi và bưởi chùm; Bảo vệ nhiệt trước máy sấy
                `,
        img: "https://clmensstore.com/wp-content/uploads/2018/07/the-original-hair-tonic.png",
      },
      {
        id: "41",
        type: "ddt",
        name: "Arcadian Conditioning Oil",
        price: "400000",
        brand: "Arcadian Grooming",
        capacity: "60ml",
        detail: `Mùi hương:  Tràm trà, gỗ, thảo mộc
                Hiệu năng: Dưỡng mềm tóc, da thô ráp và râu khô
                `,
        img: "https://clmensstore.com/wp-content/uploads/2018/07/ConditioningOil_1799x1799.jpg",
      },
      {
        id: "42",
        type: "ddt",
        name: "Dauntless Grooming Oil",
        price: "430000",
        brand: "Dauntless",
        capacity: "56g",
        detail: `
                Hiệu năng: Làm mượt và làm mới mái tóc của bạn, phục hồi tóc khô hoặc hỗ trợ trị gàu, hỗ trợ bảo vệ nhiệt
                `,
        img: "https://clmensstore.com/wp-content/uploads/2020/02/Dauntless-Grooming-oil-768x587.png",
      },
      {
        id: "43",
        type: "ddt",
        name: "Dapper Dan Grooming Tonic",
        price: "450000",
        brand: "Dapper Dan",
        capacity: "250ml",
        detail: `
                Mùi hương: Vanilla và Đậu Tonka
                Hiệu năng: Giúp dưỡng tóc và bảo vệ nhiệt trước máy sấy, tăng độ phồng và Texture khi dùng làm Pre-styling
                `,
        img: "https://clmensstore.com/wp-content/uploads/2020/07/Grooming_Tonic_1800x_1-768x768.jpg",
      },

    ];
    // svt btp psl dgx ddt
    localStorage.setItem('product', JSON.stringify(productArray));
  }
}
function showProduct() {
  var url = document.location.href;
  var temp = url.split("?");
  var s = '';
  var productArray = JSON.parse(localStorage.getItem('product'));
  if (temp[1] == '' || temp[1] == undefined || temp[1].search('all') == 0) {
    if (temp[1] == '' || temp[1] == undefined) {
      temp = 'all&0';
    }
    else {
      temp = temp[1];
    }
    var temp2 = temp.split("&");
    var vitri = temp2[1];
    var sotrang = 0, dem = 0;

    for (var i = vitri; i < productArray.length; i++) {
      s += `<li id="card">
      <div class="product-item">
            <img src="${productArray[i].img}" alt="">
            <div class="product-name">${productArray[i].name}</div>
            <div class="product-price">${currency(productArray[i].price)}</div>
            <button class="icon-btn" onClick="addCart(${productArray[i].id})"><i class="fa-sharp fa-solid fa-cart-plus"></i></button>
            <button class="buy-now" id="bn${i}" onclick="showProductInfo('${productArray[i].id}')">MUA NGAY</button>
      </div>
    </li>`;
      dem++;
      if (dem == 12)
        break;
    }
    sotrang = Math.ceil(productArray.length / 12);
    var lienket = '';

    for (var i = 1; i <= sotrang; i++) {
      vitri = (i - 1) * 12;
      var a = '<a href = "index.html?all&' + vitri + '">' + i + '</a>';
      lienket += '<div class = "pageNumber">' + a + '</div>';
    }
    document.getElementById('page').innerHTML = lienket;
  }
  else {
    temp = temp[1];
    var temp2 = temp.split("&");
    var typeProduct = temp2[0];
    var vitri = temp2[1];
    var sotrang = 0, dem = 0;
    var arrtempt = [];
    for (var i = 0; i < productArray.length; i++) {
      if (productArray[i].type == typeProduct)
        arrtempt.push(productArray[i]);
    }
    for (var i = vitri; i < arrtempt.length; i++) {
      s +=
        `<li id="card">
      <div class="product-item">
            <img src="${arrtempt[i].img}" alt="">
            <div class="product-name">${arrtempt[i].name}</div>
            <div class="product-price">${currency(arrtempt[i].price)}</div>
            <button class="icon-btn" onClick="addCart(${arrtempt[i].id})"><i class="fa-sharp fa-solid fa-cart-plus"></i></button>
            <button class="buy-now" id="bn${i}" onclick="showProductInfo('${arrtempt[i].id}')">MUA NGAY</button>
      </div>
    </li>`;
      dem++;
      if (dem == 8)
        break;
    }
    sotrang = Math.ceil(arrtempt.length / 8);
    var lienket = '';
    for (var i = 1; i <= sotrang; i++) {
      vitri = (i - 1) * 8;
      var a = '<a href="index.html?' + arrtempt[i].type + '&' + vitri + '">' + i + '</a>';
      lienket += '<div class = "pageNumber">' + a + '</div>';
    }
    document.getElementById('page').innerHTML = lienket;
  }
  document.getElementById('product').innerHTML = s;
}
function showProductInfo(productid) {
  document.getElementById('productInfo').style.display = 'block';
  var productArray = JSON.parse(localStorage.getItem('product'));
  for (var i = 0; i < productArray.length; i++) {
    if (productArray[i].id == productid) {
      document.getElementById('productname').innerHTML = productArray[i].name;
      document.getElementById('productbrand').innerHTML = 'Thương hiệu: ' + productArray[i].brand;
      document.getElementById('productprice').innerHTML = 'Giá: ' + currency(productArray[i].price);
      document.getElementById('productdetail').innerHTML = productArray[i].detail;
      document.getElementById('imgbig').src = productArray[i].img;
      document.querySelector('#info .right button.addtocart').setAttribute('onclick', 'addCart(' + productid + ')');
    }
  }
}

function closeProductInfo() {
  document.getElementById('productInfo').style.display = 'none';
}
// PRODUCT END 
/*USER*/
function createAdmin() {
  if (localStorage.getItem('user') === null) {
    var userArray = [];
    var user = { username: 'admin', password: 'admin', fullname: 'Nguyen Van A', email:"duckg2083@gmai.com",address: '273 An Dương Vương, P3, Quận 5, TPHCM', phone: '0566490523', datesignup: '23-11-1999' };
    userArray.push(user);
    localStorage.setItem('user', JSON.stringify(userArray));
  }
}
function showform() {
  var userform = document.getElementById('user');
  userform.style.display = 'block';
}
function closeform() {
  var userform = document.getElementById('user');
  userform.style.display = 'none';
}
function showSignUp() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('signup').style.display = 'block';
}
function showLogin() {
  document.getElementById('signup').style.display = 'none';
  document.getElementById('login').style.display = 'block';
}
//document.getElementById('signupform').addEventListener('submit', createUser);
//document.getElementById('loginform').addEventListener('submit', login);
function createUser() {
  //e.preventDefault();
  var fullname = document.getElementById('fullname');
  var address = document.getElementById('address');
  var phone = document.getElementById('phone');
  var username = document.getElementById('usernameSignUp');
  var email = document.getElementById('emailSignUp');
  var password = document.getElementById('passwordSignUp');
  var password2 = document.getElementById('passwordSignUp2');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var flag = true;

  if (!fullname.value) {
    document.getElementById('fullnameerror').style.display = 'block';
    flag = false;
  } else {
    document.getElementById('fullnameerror').style.display = 'none';
  }

  if (!address.value) {
    document.getElementById('addresserror').style.display = 'block';
    flag = false;
  } else {
    document.getElementById('addresserror').style.display = 'none';
  }

  if (!phone.value) {
    document.getElementById('phoneerror').style.display = 'block';
    flag = false;
  } else {
    if (isNaN(Number(phone.value))) {
      document.getElementById('phoneerror').style.display = 'block';
      document.getElementById('phoneerror').innerHTML = 'Số điện thoại không hợp lệ';
      flag = false;
    } else {
      if (Number(phone.value) < 100000000 || Number(phone.value) > 999999999) {
        document.getElementById('phoneerror').style.display = 'block';
        document.getElementById('phoneerror').innerHTML = 'Số điện thoại không đúng';
        flag = false;
      } else {
        document.getElementById('phoneerror').style.display = 'none';
      }
    }
  }

  if (!email.value || !filter.test(email.value)) {
    document.getElementById('emailerror').style.display = 'block'
  }
  else {
    document.getElementById('emailerror').style.display = 'none';
  }
  if (!username.value) {
    document.getElementById('usererror').style.display = 'block';
    flag = false;
  } else {
    document.getElementById('usererror').style.display = 'none';
  }

  if (!password.value) {
    document.getElementById('passworderror').style.display = 'block';
    flag = false;
  } else {
    if (password.value.length < 8) {
      document.getElementById('passworderror').style.display = 'block';
      document.getElementById('passworderror').innerHTML = 'Mật khẩu phải trên 8 ký tự';
      flag = false;
    } else {
      document.getElementById('passworderror').style.display = 'none';
    }
  }

  if (password2.value != password.value) {
    document.getElementById('password2error').style.display = 'block';
    flag = false;
  } else {
    document.getElementById('password2error').style.display = 'none';
  }

  if (flag == false) {
    return false;
  }

  var d = new Date();
  var datesignup = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
  var user = {
     username: username.value, 
     password: password.value, 
     fullname: fullname.value, 
     email: email.value,
     address: address.value, 
     phone: phone.value, 
     datesignup: datesignup };
  var userArray = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
  for (var i = 0; i < userArray.length; i++) {
    if (user.username == userArray[i].username) {
      document.getElementById('usererror').style.display = 'block';
      document.getElementById('usererror').innerHTML = 'Tên đăng nhập đã có người sử dụng';
      username.focus();
      return false;
    }
  }
  userArray.push(user);
  localStorage.setItem('user', JSON.stringify(userArray));
  customAlert('Bạn đã đăng ký thành công!');
  showUser();
  showLogin();
}
function login() {
  //e.preventDefault();
  var username = document.getElementById('usernameLogin').value;
  var password = document.getElementById('passwordLogin').value;
  var flag = true;
  if (!username) {
    document.getElementById('usernameerror').style.display = 'block';
    flag = false;
  } else {
    document.getElementById('usernameerror').style.display = 'none';
  }
  if (!password) {
    document.getElementById('passwordloginerror').style.display = 'block';
    flag = false;
  } else {
    document.getElementById('passwordloginerror').style.display = 'none';
  }
  if (flag == false) {
    return false;
  }
  var userArray = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
  for (var i = 0; i < userArray.length; i++) {
    if (username == userArray[i].username) {
      if (password == userArray[i].password) {
        closeform();
        localStorage.setItem('userlogin', JSON.stringify(userArray[i]));
        window.location.reload();
        return true;
      }
    }
  }
  document.getElementById('passwordloginerror').style.display = 'block';
  document.getElementById('passwordloginerror').innerHTML = 'Sai thông tin đăng nhập';
  return false;
}
function logout(url) {
  localStorage.removeItem('userlogin');
  localStorage.removeItem('cart');
  location.href = url;
}

function checklogin() {
  if (localStorage.getItem('userlogin')) {
    var user = JSON.parse(localStorage.getItem('userlogin'));
    var s = '';
    if (user.username == 'admin') {
      s = `  <li id="nav-user">
      <button class="nav-item-link" onClick = "window.location.href=\'manage.html\'">
          ${user.username}
          <i class="fa-solid fa-gear"></i>
      </button>
    </li>
    <li id="nav-cart">
      <button class="nav-item-link" onclick="show_cart()">
          <i class="fa-solid fa-cart-shopping"></i>
          GIỎ HÀNG
      </button>
  </li>

  <li id="nav-logout">
  <button id="btnlogout" class="nav-item-link" onClick="logout(\'index.html\')">
  ĐĂNG XUẤT
  <i class="fa-solid fa-right-from-bracket"></i>
  </button>
  </li>`
    } else {
      s = `<li id="nav-cart">
      <button class="nav-item-link" onclick="show_cart()">
          <i class="fa-solid fa-cart-shopping"></i>
          GIỎ HÀNG
      </button>
  </li>
  <li id="nav-user">
      <button class="nav-item-link">
          ${user.username}
      </button>
  </li>
  <li id="nav-logout">
  <button class="nav-item-link" onClick="logout(\'index.html\')">
  <i class="fa-solid fa-right-from-bracket"></i>
  </button>
  </li>`
      '<li><button>' + user.fullname + '</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT <i class="fa-solid fa-right-from-bracket"></i></button></li>' +
        '<li><button onClick="location.href=\'file/cart.html\'"><i class="fa-solid fa-cart-shopping"></i></button></li>';

    }
    document.querySelector('#topbar #header__navbar ul.nav-right').innerHTML = s;
  }
}

/*END USER*/
/*CUSTOM ALERT BOX*/
function customAlert(message, type) {
  if (type == 'success') {
    document.getElementById("customalert").style.backgroundColor = '#4CAF50';
  }
  if (type == 'warning') {
    document.getElementById("customalert").style.backgroundColor = '#f44336';
  }
  document.getElementById("customalert").innerHTML = message;
  var x = document.getElementById("customalert");
  x.className = "show";
  setTimeout(function () { x.className = x.classList.remove("show"); }, 3500);
}
/* SEARCH */
function showSearch() {
  document.getElementById('searchsection').style.display = 'block';
  document.getElementById('product').style.display = 'none';
  document.getElementById('bannerSection').style.display = 'none';
  document.getElementById('page').style.display = 'none';
  document.getElementById('foot').style.display = 'none';
  document.getElementById('mail').style.display = 'none';
  document.getElementById('cart').style.display = 'none';
}
function closeSearch() {
  document.getElementById('searchsection').style.display = 'none';
  document.getElementById('page').style.display = 'flex';
  document.getElementById('product').style.display = 'flex';
  document.getElementById('bannerSection').style.display = 'block';
  document.getElementById('foot').style.display = 'block';
  document.getElementById('mail').style.display = 'block';
}
function search() {
  let tmparr = [];
  var productsearch = document.getElementById('search-text').value.toLowerCase();
  var productArray = JSON.parse(localStorage.getItem('product'));
  var s = '';
  if (document.getElementById('searchextend').className == '') {
    for (var i = 0; i < productArray.length; i++) {
      if ((productArray[i].name.toLowerCase().search(productsearch) != -1 || productArray[i].type.toLowerCase().search(productsearch) != -1) && productsearch != '') {
        tmparr.push(productArray[i]);
      }
    }
  }
  else {
    var typesearch = document.getElementById('typesearch').value.toLowerCase();
    var pricefrom = document.getElementById('pricefrom').value.toLowerCase();
    var priceto = document.getElementById('priceto').value.toLowerCase();
    if (typesearch == 'all') {
      for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].name.toLowerCase().search(productsearch) != -1 && parseInt(productArray[i].price) >= parseInt(pricefrom) && parseInt(productArray[i].price) <= parseInt(priceto)) {
          tmparr.push(productArray[i]);
        }
      }
    }
    else if (pricefrom == '' && priceto == '') {
      for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].type.toLowerCase().trim() == typesearch.toLowerCase().trim()) {

          tmparr.push(productArray[i]);
        }
      }
    }
    else {
      for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].type.toLowerCase() == typesearch.toLowerCase() && parseInt(productArray[i].price) >= parseInt(pricefrom) && parseInt(productArray[i].price) <= parseInt(priceto)) {

          tmparr.push(productArray[i]);
        }
      }
    }
  }
  showProductSearch(tmparr);
}
function showextend() {
  if (document.getElementById('searchextend').className == '') {
    document.getElementById('searchextend').classList.add('active')
    document.getElementById('searchresult').classList.add('active')
    document.getElementById('page1').classList.add('active')
    // document.queryrector('#searchsection .searchbox button img').src = 'images/icon/arrow2.svg';
  }
  else {
    document.getElementById('searchextend').classList.remove('active');
    document.getElementById('searchresult').classList.remove('active');
    document.getElementById('page1').classList.remove('active');
    // document.querySelector('#searchsection .searchbox button img').src = 'images/icon/arrow.svg';
    var pricefrom = document.getElementById('pricefrom').value = "";
    var priceto = document.getElementById('priceto').value = "";
  }
}
function showProductSearch(tmpArr) {
  let product = tmpArr;
  let perPage = 12;
  let currentPage = 1;
  let start = 0;
  let end = perPage;
  function renderProduct1() {
    let s = "";
    const content = product.map((item, index) => {
      if (index >= start && index < end) {
        s += `<li id="card">
              <div class="product-item">
                    <img src="${item.img}" alt="">
                    <div class="product-name">${item.name}</div>
                    <div class="product-price">${currency(item.price)}</div>
                    <button class="icon-btn" id="atc" onClick="addToCart(${item.id})"><i class="fa-sharp fa-solid fa-cart-plus"></i></button>
                    <button class="buy-now" id="bn${item.id}" onclick="showProductInfo('${item.id}')">MUA NGAY</button>
              </div>
            </li>`;
        return s;
      }
    })
    document.getElementById('searchresult').innerHTML = s;
  }
  function getCurrentPage1(currentPage) {
    start = (currentPage - 1) * perPage
    end = currentPage * perPage
  }
  function changePage1() {
    const currentPages = document.querySelectorAll("#page1 div")
    for (let i = 0; i < currentPages.length; i++) {
      currentPages[i].addEventListener("click", function () {
        let value = i + 1
        currentPage = value
        getCurrentPage1(currentPage)
        renderProduct1()
      })
    }
  }
  function displayPanigation1() {
    let sotrang = Math.ceil(product.length / perPage);
    var lienket = '';
    for (var i = 1; i <= sotrang; i++) {
      vitri = (i - 1) * perPage;
      // var a ='<a href="">'+i+'</a>';
      lienket += '<div class="pageNumber1">' + i + '</div>';
    }
    document.getElementById("page1").innerHTML = lienket;
  }
  renderProduct1()
  displayPanigation1()
  changePage1()
  pageActive()
}
function pageActive() {
  let pages = document.querySelectorAll(".pageNumber1")
  pages.forEach(page1 => {
    page1.addEventListener('click', () => {
      pages.forEach(page1 => {
        page1.classList.remove('page_active')
      })
      page1.classList.add('page_active')
    })
  });
}
// SEARCH END 
// BANNER
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
// BANNER END
// CART
function addCart(index){
  let productArray = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
  let carts = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [];
  let products;
  for(let i=0; i<productArray.length;i++){
    if(productArray[i].id==index){
      products = productArray[i];
    }
  }
  let cart = {
    id: products.id,
    name: products.name,
    type: products.type,
    brand: products.brand,
    capacity: products.capacity,
    detail: products.detail,
    img: products.img,
    price: products.price,
    sl: document.getElementsByClassName("sl-info")[0].value
  };
  carts.push(cart);
  localStorage.setItem("carts", JSON.stringify(carts));
  alert("Thêm vào giỏ hàng thành công");
  document.getElementsByClassName("sl-info")[0].value=1;
  closeProductInfo();
  showCart();
}
function showCart(){
let carts = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [];
if(localStorage.getItem("carts") != undefined ){
  console.log(carts);
  let cr =`
        <tr class="in-cart">
        <th class="pd-cart">SẢN PHẨM</th>
        <th class="tien">GIÁ</th>
        <th class="soluong">SỐ LƯỢNG</th>
        <th class="tamtinh">TẠM TÍNH</th>
        <th class="xoa"><button class="xoacart" onclick="deleteAllProdcutCart()">XÓA TẤT CẢ</button></th>
      </tr>`;
  let toltalMoney = 0;
  carts.map((cart, index) => {
      cr +=`
      
      <tr class="in-cart">
          <th class="pd-cart">
            <img src="${cart.img}">
            <p>${cart.name}</p>
          </th>
          <th class="tien">${currency(cart.price)}</th>
          <th class="soluong" style="padding:0;">
            <button class="sl1" onclick="downSL(${index})">-</button>
            <input class="sl2" loai="text" disabled=""  value=${cart.sl} >
            <button class="sl1" onclick="upSL(${index})">+</button>
          </th>
          <th class="tamtinh">${currency(tamtinh(index))}</th>
          <th class="xoa">
          <button onclick="deleteProductCart(${index})" style="border-radius: 10px;
            font-size: large;
            height: 30px;
            width: 30px;
            cursor:pointer;">X</button>
          </th>
      </tr>`; 
      toltalMoney+=tamtinh(index);
  });
  document.getElementsByClassName("total")[0].style.display="block";
  document.getElementsByClassName("hienthi")[0].style.display="flex";
  document.getElementsByClassName("cart-list")[0].innerHTML = cr;
  document.getElementsByClassName("total-money")[0].innerHTML = currency(toltalMoney);
}
else{
  document.getElementsByClassName("total")[0].style.display="none";
  document.getElementsByClassName("hienthi")[0].style.display="none";
  let s =`<th>KHÔNG CÓ SẢN PHẨM TRONG GIỎ HÀNG</th>`
  document.getElementsByClassName("cart-list")[0].innerHTML= s;
  document.getElementsByClassName("total-money")[0].innerHTML = 0;
}
}
function show_cart(){
  document.getElementById("searchsection").style.display="none";
  document.getElementById("bannerSection").style.display="none";
  document.getElementById("page").style.display="none";
  document.getElementById("mail").style.display="none";
  document.getElementById("product").style.display="none";
  document.getElementById("cart").style.display="block";
  showBill();
}
function show_pd(){
document.getElementById("product").style.display="block";
document.getElementById("cart").style.display="none";
}
function upSL_info(){
  document.getElementsByClassName("sl-info")[0].value++;
}
function upSL(index){
let carts = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [];
document.getElementsByClassName("sl2")[index].value=Number.parseInt(carts[index].sl,10)+1;
carts[index] = {
  id: carts[index].id,
  name: carts[index].name,
  type: carts[index].type,
  brand: carts[index].brand,
  capacity: carts[index].capacity,
  detail: carts[index].detail,
  img: carts[index].img,
  price: carts[index].price,
  sl: document.getElementsByClassName("sl2")[index].value
}
localStorage.setItem("carts", JSON.stringify(carts));
showCart();
}
function downSL_info(){
	if( document.getElementsByClassName("sl-info")[0].value > 1){
    document.getElementsByClassName("sl-info")[0].value--;
	}
}
function downSL(index){
let carts = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [];
if(document.getElementsByClassName("sl2")[index].value=Number.parseInt(carts[index].sl,10)>1){
  document.getElementsByClassName("sl2")[index].value=Number.parseInt(carts[index].sl,10)-1;
carts[index] = {
  id: carts[index].id,
  name: carts[index].name,
  type: carts[index].type,
  brand: carts[index].brand,
  capacity: carts[index].capacity,
  detail: carts[index].detail,
  img: carts[index].img,
  price: carts[index].price,
  sl: document.getElementsByClassName("sl2")[index].value
}
localStorage.setItem("carts", JSON.stringify(carts));
showCart();
}else{
  document.getElementsByClassName("sl2")[index].value=Number.parseInt(carts[index].sl,10);
}
}
function tamtinh(index){
let carts = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [];
let sl = Number.parseInt(carts[index].sl,10);
let gt = Number.parseInt(carts[index].price,10);
return sl*gt;
}
function deleteProductCart(index){
let carts = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [];
if(carts.length == 1){
  localStorage.removeItem("carts");
}else {carts.splice(index, 1);
localStorage.setItem("carts", JSON.stringify(carts));}
showCart();
}function deleteAllProdcutCart(){
if(confirm("Bạn muốn xóa tất cả sản phầm trong giỏ hàng!")){
    localStorage.removeItem("carts");
}
showCart();
}
function checkCart(){
let customer = localStorage.getItem("userlogin") ? JSON.parse(localStorage.getItem("userlogin")) : [];
let carts = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [];
let toltalMoney = 0;
let info='';
carts.map(cart => {
  toltalMoney+=cart.price*cart.sl;
  info+=cart.sl+' x '+cart.name+' | '+ cart.capacity+'; ';
});
let date = new Date();
let d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
if(localStorage.getItem("userlogin") != undefined){
  let bills = localStorage.getItem("bills") ? JSON.parse(localStorage.getItem("bills")) : [];
  let bill = {
    id: bills.length,
    info: info,
    total: toltalMoney,
    date: d,
    customer: customer,
    status: 'Chưa xử lí'
  }
  bills.push(bill);
  localStorage.setItem("bills", JSON.stringify(bills));
  localStorage.removeItem('carts');
  showCart();
  showBill();
}else{
  // alert("Mời bạn đăng nhập để tiếp tục");
  customAlert("Mời bạn đăng nhập để tiếp tục","failed")
} 
}
function showBill(){
  let bills = localStorage.getItem("bills") ? JSON.parse(localStorage.getItem("bills")) : [];
  let user = localStorage.getItem("userlogin") ? JSON.parse(localStorage.getItem("userlogin")) : [];
  if (localStorage.getItem('bills')!=undefined){
    document.getElementById('bill-box').style.display = 'block';
		let s=`        <h1>ĐƠN HÀNG ĐÃ ĐẶT</h1> `;
		bills.map(bill=> {
			if(user.username==bill.customer.username){
				s +=`
        <table id="bill">
        <tr class="bill-content">
          <th id="bill-info"><p>${bill.info}</p></th>
          <th id="bill-total">${currency(bill.total)}</th>
          <th id="bill-date">${bill.date}</th>
          <th id="bill-status">${bill.status}</th>
      </tr>
      </table>`; 
			}
		});
		document.getElementById('bill-box').innerHTML = s;
	}
	else{
    document.getElementById('bill-box').style.display = "none";
	}
}
//CART END
