 // داده‌های رنگ‌ها (۱۵۰ رنگ)
        const colors = [
            // رنگ‌های اصلی (20 رنگ)
            { name: {fa: "قرمز", en: "Red"}, hex: "#FF0000", rgb: "255, 0, 0", category: "primary" },
            { name: {fa: "سبز", en: "Green"}, hex: "#00FF00", rgb: "0, 255, 0", category: "primary" },
            { name: {fa: "آبی", en: "Blue"}, hex: "#0000FF", rgb: "0, 0, 255", category: "primary" },
            { name: {fa: "زرد", en: "Yellow"}, hex: "#FFFF00", rgb: "255, 255, 0", category: "primary" },
            { name: {fa: "فیروزه‌ای", en: "Cyan"}, hex: "#00FFFF", rgb: "0, 255, 255", category: "primary" },
            { name: {fa: "ارغوانی", en: "Magenta"}, hex: "#FF00FF", rgb: "255, 0, 255", category: "primary" },
            { name: {fa: "نارنجی", en: "Orange"}, hex: "#FFA500", rgb: "255, 165, 0", category: "primary" },
            { name: {fa: "بنفش", en: "Purple"}, hex: "#800080", rgb: "128, 0, 128", category: "primary" },
            { name: {fa: "صورتی", en: "Pink"}, hex: "#FFC0CB", rgb: "255, 192, 203", category: "primary" },
            { name: {fa: "قهوه‌ای", en: "Brown"}, hex: "#A52A2A", rgb: "165, 42, 42", category: "primary" },
            { name: {fa: "مشکی", en: "Black"}, hex: "#000000", rgb: "0, 0, 0", category: "primary" },
            { name: {fa: "سفید", en: "White"}, hex: "#FFFFFF", rgb: "255, 255, 255", category: "primary" },
            { name: {fa: "خاکستری", en: "Gray"}, hex: "#808080", rgb: "128, 128, 128", category: "primary" },
            { name: {fa: "نقره‌ای", en: "Silver"}, hex: "#C0C0C0", rgb: "192, 192, 192", category: "primary" },
            { name: {fa: "طلایی", en: "Gold"}, hex: "#FFD700", rgb: "255, 215, 0", category: "primary" },
            { name: {fa: "برنزی", en: "Bronze"}, hex: "#CD7F32", rgb: "205, 127, 50", category: "primary" },
            { name: {fa: "نقره‌ای روشن", en: "Light Silver"}, hex: "#D3D3D3", rgb: "211, 211, 211", category: "primary" },
            { name: {fa: "طلایی تیره", en: "Dark Gold"}, hex: "#B8860B", rgb: "184, 134, 11", category: "primary" },
            { name: {fa: "مس", en: "Copper"}, hex: "#B87333", rgb: "184, 115, 51", category: "primary" },
            { name: {fa: "پلاتین", en: "Platinum"}, hex: "#E5E4E2", rgb: "229, 228, 226", category: "primary" },
            
            // رنگ‌های گرم (25 رنگ)
            { name: {fa: "قرمز تیره", en: "Dark Red"}, hex: "#8B0000", rgb: "139, 0, 0", category: "warm" },
            { name: {fa: "مرجانی", en: "Coral"}, hex: "#FF7F50", rgb: "255, 127, 80", category: "warm" },
            { name: {fa: "قرمز گیلاسی", en: "Crimson"}, hex: "#DC143C", rgb: "220, 20, 60", category: "warm" },
            { name: {fa: "نارنجی تیره", en: "Dark Orange"}, hex: "#FF8C00", rgb: "255, 140, 0", category: "warm" },
            { name: {fa: "صورتی داغ", en: "Hot Pink"}, hex: "#FF69B4", rgb: "255, 105, 180", category: "warm" },
            { name: {fa: "قرمز هندوانه‌ای", en: "Watermelon"}, hex: "#FC6C85", rgb: "252, 108, 133", category: "warm" },
            { name: {fa: "قرمز گوجه‌ای", en: "Tomato"}, hex: "#FF6347", rgb: "255, 99, 71", category: "warm" },
            { name: {fa: "قرمز مرجانی", en: "Coral Red"}, hex: "#FF4040", rgb: "255, 64, 64", category: "warm" },
            { name: {fa: "نارنجی روشن", en: "Light Orange"}, hex: "#FFA07A", rgb: "255, 160, 122", category: "warm" },
            { name: {fa: "قرمز آتشی", en: "Fire Brick"}, hex: "#B22222", rgb: "178, 34, 34", category: "warm" },
            { name: {fa: "قرمز روشن", en: "Light Red"}, hex: "#FF6B6B", rgb: "255, 107, 107", category: "warm" },
            { name: {fa: "صورتی عمیق", en: "Deep Pink"}, hex: "#FF1493", rgb: "255, 20, 147", category: "warm" },
            { name: {fa: "نارنجی-قرمز", en: "Orange Red"}, hex: "#FF4500", rgb: "255, 69, 0", category: "warm" },
            { name: {fa: "قرمز هندی", en: "Indian Red"}, hex: "#CD5C5C", rgb: "205, 92, 92", category: "warm" },
            { name: {fa: "صورتی روشن", en: "Light Pink"}, hex: "#FFB6C1", rgb: "255, 182, 193", category: "warm" },
            { name: {fa: "قرمز آجری", en: "Brick Red"}, hex: "#CB4154", rgb: "203, 65, 84", category: "warm" },
            { name: {fa: "صورتی تیره", en: "Dark Pink"}, hex: "#E75480", rgb: "231, 84, 128", category: "warm" },
            { name: {fa: "قرمز شرابی", en: "Wine Red"}, hex: "#722F37", rgb: "114, 47, 55", category: "warm" },
            { name: {fa: "نارنجی-صورتی", en: "Salmon"}, hex: "#FA8072", rgb: "250, 128, 114", category: "warm" },
            { name: {fa: "قرمز خونی", en: "Blood Red"}, hex: "#660000", rgb: "102, 0, 0", category: "warm" },
            { name: {fa: "صورتی مرجانی", en: "Coral Pink"}, hex: "#F88379", rgb: "248, 131, 121", category: "warm" },
            { name: {fa: "قرمز روشن", en: "Bright Red"}, hex: "#EE4B2B", rgb: "238, 75, 43", category: "warm" },
            { name: {fa: "نارنجی طلایی", en: "Golden Orange"}, hex: "#FFA500", rgb: "255, 165, 0", category: "warm" },
            { name: {fa: "قرمز توت‌فرنگی", en: "Strawberry"}, hex: "#FC5A8D", rgb: "252, 90, 141", category: "warm" },
            { name: {fa: "قرمز گلی", en: "Rose Red"}, hex: "#C21E56", rgb: "194, 30, 86", category: "warm" },
            
            // رنگ‌های سرد (25 رنگ)
            { name: {fa: "آبی دریایی", en: "Sea Green"}, hex: "#2E8B57", rgb: "46, 139, 87", category: "cool" },
            { name: {fa: "آبی آسمانی", en: "Sky Blue"}, hex: "#87CEEB", rgb: "135, 206, 235", category: "cool" },
            { name: {fa: "نیلی", en: "Indigo"}, hex: "#4B0082", rgb: "75, 0, 130", category: "cool" },
            { name: {fa: "آبی کاربنی", en: "Cobalt Blue"}, hex: "#0047AB", rgb: "0, 71, 171", category: "cool" },
            { name: {fa: "سبز دریایی", en: "Sea Green"}, hex: "#2E8B57", rgb: "46, 139, 87", category: "cool" },
            { name: {fa: "آبی فولادی", en: "Steel Blue"}, hex: "#4682B4", rgb: "70, 130, 180", category: "cool" },
            { name: {fa: "بنفش کمرنگ", en: "Lavender"}, hex: "#EE82EE", rgb: "238, 130, 238", category: "cool" },
            { name: {fa: "آبی سلطنتی", en: "Royal Blue"}, hex: "#4169E1", rgb: "65, 105, 225", category: "cool" },
            { name: {fa: "سبز آبی", en: "Teal"}, hex: "#008080", rgb: "0, 128, 128", category: "cool" },
            { name: {fa: "آبی نفتی", en: "Navy Blue"}, hex: "#000080", rgb: "0, 0, 128", category: "cool" },
            { name: {fa: "آبی روشن", en: "Light Blue"}, hex: "#ADD8E6", rgb: "173, 216, 230", category: "cool" },
            { name: {fa: "سبز روشن", en: "Light Green"}, hex: "#90EE90", rgb: "144, 238, 144", category: "cool" },
            { name: {fa: "بنفش روشن", en: "Light Purple"}, hex: "#CBC3E3", rgb: "203, 195, 227", category: "cool" },
            { name: {fa: "آبی تیره", en: "Dark Blue"}, hex: "#00008B", rgb: "0, 0, 139", category: "cool" },
            { name: {fa: "سبز تیره", en: "Dark Green"}, hex: "#006400", rgb: "0, 100, 0", category: "cool" },
            { name: {fa: "بنفش تیره", en: "Dark Purple"}, hex: "#4B0082", rgb: "75, 0, 130", category: "cool" },
            { name: {fa: "آبی-سبز", en: "Blue Green"}, hex: "#0D98BA", rgb: "13, 152, 186", category: "cool" },
            { name: {fa: "سبز-آبی", en: "Green Blue"}, hex: "#1164B4", rgb: "17, 100, 180", category: "cool" },
            { name: {fa: "آبی-بنفش", en: "Blue Purple"}, hex: "#8A2BE2", rgb: "138, 43, 226", category: "cool" },
            { name: {fa: "بنفش-آبی", en: "Purple Blue"}, hex: "#4B0082", rgb: "75, 0, 130", category: "cool" },
            { name: {fa: "سبز-بنفش", en: "Green Purple"}, hex: "#6A0DAD", rgb: "106, 13, 173", category: "cool" },
            { name: {fa: "بنفش-سبز", en: "Purple Green"}, hex: "#3CB371", rgb: "60, 179, 113", category: "cool" },
            { name: {fa: "آبی-خاکستری", en: "Blue Gray"}, hex: "#6699CC", rgb: "102, 153, 204", category: "cool" },
            { name: {fa: "سبز-خاکستری", en: "Green Gray"}, hex: "#77DD77", rgb: "119, 221, 119", category: "cool" },
            { name: {fa: "بنفش-خاکستری", en: "Purple Gray"}, hex: "#A8A4CE", rgb: "168, 164, 206", category: "cool" },
            
            // رنگ‌های خنثی (20 رنگ)
            { name: {fa: "بژ", en: "Beige"}, hex: "#F5F5DC", rgb: "245, 245, 220", category: "neutral" },
            { name: {fa: "قهوه‌ای مایل به زرد", en: "Sandy Brown"}, hex: "#F4A460", rgb: "244, 164, 96", category: "neutral" },
            { name: {fa: "زیتونی", en: "Olive"}, hex: "#808000", rgb: "128, 128, 0", category: "neutral" },
            { name: {fa: "خاکستری تیره", en: "Dark Gray"}, hex: "#A9A9A9", rgb: "169, 169, 169", category: "neutral" },
            { name: {fa: "خاکستری روشن", en: "Light Gray"}, hex: "#D3D3D3", rgb: "211, 211, 211", category: "neutral" },
            { name: {fa: "خاکستری متوسط", en: "Medium Gray"}, hex: "#BEBEBE", rgb: "190, 190, 190", category: "neutral" },
            { name: {fa: "خاکستری دودی", en: "Smoky Gray"}, hex: "#848484", rgb: "132, 132, 132", category: "neutral" },
            { name: {fa: "خاکستری زغالی", en: "Charcoal Gray"}, hex: "#36454F", rgb: "54, 69, 79", category: "neutral" },
            { name: {fa: "خاکستری نقره‌ای", en: "Silver Gray"}, hex: "#C0C0C0", rgb: "192, 192, 192", category: "neutral" },
            { name: {fa: "خاکستری طلایی", en: "Golden Gray"}, hex: "#DAA520", rgb: "218, 165, 32", category: "neutral" },
            { name: {fa: "خاکستری مایل به آبی", en: "Blue Gray"}, hex: "#6699CC", rgb: "102, 153, 204", category: "neutral" },
            { name: {fa: "خاکستری مایل به سبز", en: "Green Gray"}, hex: "#77DD77", rgb: "119, 221, 119", category: "neutral" },
            { name: {fa: "خاکستری مایل به بنفش", en: "Purple Gray"}, hex: "#A8A4CE", rgb: "168, 164, 206", category: "neutral" },
            { name: {fa: "خاکستری مایل به قرمز", en: "Red Gray"}, hex: "#A52A2A", rgb: "165, 42, 42", category: "neutral" },
            { name: {fa: "خاکستری مایل به نارنجی", en: "Orange Gray"}, hex: "#FFA500", rgb: "255, 165, 0", category: "neutral" },
            { name: {fa: "خاکستری مایل به زرد", en: "Yellow Gray"}, hex: "#FFFF00", rgb: "255, 255, 0", category: "neutral" },
            { name: {fa: "خاکستری مایل به صورتی", en: "Pink Gray"}, hex: "#FFC0CB", rgb: "255, 192, 203", category: "neutral" },
            { name: {fa: "خاکستری مایل به قهوه‌ای", en: "Brown Gray"}, hex: "#A52A2A", rgb: "165, 42, 42", category: "neutral" },
            { name: {fa: "خاکستری مایل به سفید", en: "White Gray"}, hex: "#FFFFFF", rgb: "255, 255, 255", category: "neutral" },
            { name: {fa: "خاکستری مایل به مشکی", en: "Black Gray"}, hex: "#000000", rgb: "0, 0, 0", category: "neutral" },
            
            // رنگ‌های پاستلی (20 رنگ)
            { name: {fa: "صورتی کمرنگ", en: "Light Pink"}, hex: "#FFB6C1", rgb: "255, 182, 193", category: "pastel" },
            { name: {fa: "آبی روشن", en: "Light Blue"}, hex: "#ADD8E6", rgb: "173, 216, 230", category: "pastel" },
            { name: {fa: "بنفش روشن", en: "Plum"}, hex: "#D8BFD8", rgb: "216, 191, 216", category: "pastel" },
            { name: {fa: "زرد لیمویی", en: "Lemon Chiffon"}, hex: "#FFFACD", rgb: "255, 250, 205", category: "pastel" },
            { name: {fa: "سبز نعنایی", en: "Mint Green"}, hex: "#98FB98", rgb: "152, 251, 152", category: "pastel" },
            { name: {fa: "هلویی", en: "Peach Puff"}, hex: "#FFDAB9", rgb: "255, 218, 185", category: "pastel" },
            { name: {fa: "لاواندر", en: "Lavender Blush"}, hex: "#E6E6FA", rgb: "230, 230, 250", category: "pastel" },
            { name: {fa: "آبی پودری", en: "Powder Blue"}, hex: "#B0E0E6", rgb: "176, 224, 230", category: "pastel" },
            { name: {fa: "سبز بهاری", en: "Spring Green"}, hex: "#00FF7F", rgb: "0, 255, 127", category: "pastel" },
            { name: {fa: "صورتی روشن", en: "Light Pink"}, hex: "#FFB6C1", rgb: "255, 182, 193", category: "pastel" },
            { name: {fa: "آبی روشن", en: "Light Blue"}, hex: "#ADD8E6", rgb: "173, 216, 230", category: "pastel" },
            { name: {fa: "بنفش روشن", en: "Light Purple"}, hex: "#CBC3E3", rgb: "203, 195, 227", category: "pastel" },
            { name: {fa: "زرد روشن", en: "Light Yellow"}, hex: "#FFFFE0", rgb: "255, 255, 224", category: "pastel" },
            { name: {fa: "سبز روشن", en: "Light Green"}, hex: "#90EE90", rgb: "144, 238, 144", category: "pastel" },
            { name: {fa: "نارنجی روشن", en: "Light Orange"}, hex: "#FFDAB9", rgb: "255, 218, 185", category: "pastel" },
            { name: {fa: "قرمز روشن", en: "Light Red"}, hex: "#FF6B6B", rgb: "255, 107, 107", category: "pastel" },
            { name: {fa: "بنفش روشن", en: "Light Purple"}, hex: "#CBC3E3", rgb: "203, 195, 227", category: "pastel" },
            { name: {fa: "آبی روشن", en: "Light Blue"}, hex: "#ADD8E6", rgb: "173, 216, 230", category: "pastel" },
            { name: {fa: "سبز روشن", en: "Light Green"}, hex: "#90EE90", rgb: "144, 238, 144", category: "pastel" },
            { name: {fa: "زرد روشن", en: "Light Yellow"}, hex: "#FFFFE0", rgb: "255, 255, 224", category: "pastel" },
            
            // رنگ‌های درخشان (20 رنگ)
            { name: {fa: "نئون سبز", en: "Neon Green"}, hex: "#39FF14", rgb: "57, 255, 20", category: "vibrant" },
            { name: {fa: "نئون صورتی", en: "Neon Pink"}, hex: "#FF10F0", rgb: "255, 16, 240", category: "vibrant" },
            { name: {fa: "نئون آبی", en: "Neon Blue"}, hex: "#1F51FF", rgb: "31, 81, 255", category: "vibrant" },
            { name: {fa: "نئون نارنجی", en: "Neon Orange"}, hex: "#FF5F1F", rgb: "255, 95, 31", category: "vibrant" },
            { name: {fa: "نئون بنفش", en: "Neon Purple"}, hex: "#BF00FF", rgb: "191, 0, 255", category: "vibrant" },
            { name: {fa: "زرد درخشان", en: "Vibrant Yellow"}, hex: "#FFEA00", rgb: "255, 234, 0", category: "vibrant" },
            { name: {fa: "فوشیای درخشان", en: "Electric Fuchsia"}, hex: "#FF00FF", rgb: "255, 0, 255", category: "vibrant" },
            { name: {fa: "آبی درخشان", en: "Electric Blue"}, hex: "#7DF9FF", rgb: "125, 249, 255", category: "vibrant" },
            { name: {fa: "سبز درخشان", en: "Electric Green"}, hex: "#00FF00", rgb: "0, 255, 0", category: "vibrant" },
            { name: {fa: "نارنجی درخشان", en: "Electric Orange"}, hex: "#FF5F1F", rgb: "255, 95, 31", category: "vibrant" },
            { name: {fa: "بنفش درخشان", en: "Electric Purple"}, hex: "#BF00FF", rgb: "191, 0, 255", category: "vibrant" },
            { name: {fa: "قرمز درخشان", en: "Electric Red"}, hex: "#FF0000", rgb: "255, 0, 0", category: "vibrant" },
            { name: {fa: "زرد درخشان", en: "Electric Yellow"}, hex: "#FFFF00", rgb: "255, 255, 0", category: "vibrant" },
            { name: {fa: "صورتی درخشان", en: "Electric Pink"}, hex: "#FF1493", rgb: "255, 20, 147", category: "vibrant" },
            { name: {fa: "آبی درخشان", en: "Electric Blue"}, hex: "#007FFF", rgb: "0, 127, 255", category: "vibrant" },
            { name: {fa: "سبز درخشان", en: "Electric Green"}, hex: "#00FF7F", rgb: "0, 255, 127", category: "vibrant" },
            { name: {fa: "نارنجی درخشان", en: "Electric Orange"}, hex: "#FF8C00", rgb: "255, 140, 0", category: "vibrant" },
            { name: {fa: "بنفش درخشان", en: "Electric Purple"}, hex: "#8A2BE2", rgb: "138, 43, 226", category: "vibrant" },
            { name: {fa: "قرمز درخشان", en: "Electric Red"}, hex: "#DC143C", rgb: "220, 20, 60", category: "vibrant" },
            { name: {fa: "زرد درخشان", en: "Electric Yellow"}, hex: "#FFD700", rgb: "255, 215, 0", category: "vibrant" },
            
            // رنگ‌های زمینی (20 رنگ)
            { name: {fa: "خاکی", en: "Sienna"}, hex: "#A0522D", rgb: "160, 82, 45", category: "earth" },
            { name: {fa: "قهوه‌ای سوخته", en: "Saddle Brown"}, hex: "#8B4513", rgb: "139, 69, 19", category: "earth" },
            { name: {fa: "سبز زیتونی", en: "Olive Drab"}, hex: "#556B2F", rgb: "85, 107, 47", category: "earth" },
            { name: {fa: "خاکستری سنگی", en: "Slate Gray"}, hex: "#708090", rgb: "112, 128, 144", category: "earth" },
            { name: {fa: "قهوه‌ای ماسه‌ای", en: "Sandy Brown"}, hex: "#F4A460", rgb: "244, 164, 96", category: "earth" },
            { name: {fa: "خاک رس", en: "Clay"}, hex: "#B66A50", rgb: "182, 106, 80", category: "earth" },
            { name: {fa: "قهوه‌ای شکلاتی", en: "Chocolate"}, hex: "#D2691E", rgb: "210, 105, 30", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به قرمز", en: "Red Brown"}, hex: "#A52A2A", rgb: "165, 42, 42", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به نارنجی", en: "Orange Brown"}, hex: "#CD853F", rgb: "205, 133, 63", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به زرد", en: "Yellow Brown"}, hex: "#DAA520", rgb: "218, 165, 32", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به سبز", en: "Green Brown"}, hex: "#8FBC8F", rgb: "143, 188, 143", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به آبی", en: "Blue Brown"}, hex: "#5F9EA0", rgb: "95, 158, 160", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به بنفش", en: "Purple Brown"}, hex: "#9370DB", rgb: "147, 112, 219", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به صورتی", en: "Pink Brown"}, hex: "#BC8F8F", rgb: "188, 143, 143", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به خاکستری", en: "Gray Brown"}, hex: "#A9A9A9", rgb: "169, 169, 169", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به سفید", en: "White Brown"}, hex: "#F5F5DC", rgb: "245, 245, 220", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به مشکی", en: "Black Brown"}, hex: "#2F4F4F", rgb: "47, 79, 79", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به طلایی", en: "Golden Brown"}, hex: "#DAA520", rgb: "218, 165, 32", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به نقره‌ای", en: "Silver Brown"}, hex: "#C0C0C0", rgb: "192, 192, 192", category: "earth" },
            { name: {fa: "قهوه‌ای مایل به برنزی", en: "Bronze Brown"}, hex: "#CD7F32", rgb: "205, 127, 50", category: "earth" },
            
            // رنگ‌های جواهری (20 رنگ)
            { name: {fa: "یاقوت", en: "Ruby"}, hex: "#E0115F", rgb: "224, 17, 95", category: "jewel" },
            { name: {fa: "زمرد", en: "Emerald"}, hex: "#50C878", rgb: "80, 200, 120", category: "jewel" },
            { name: {fa: "یاقوت کبود", en: "Sapphire"}, hex: "#0F52BA", rgb: "15, 82, 186", category: "jewel" },
            { name: {fa: "آمیتیست", en: "Amethyst"}, hex: "#9966CC", rgb: "153, 102, 204", category: "jewel" },
            { name: {fa: "کهربا", en: "Amber"}, hex: "#FFBF00", rgb: "255, 191, 0", category: "jewel" },
            { name: {fa: "فیروزه", en: "Turquoise"}, hex: "#40E0D0", rgb: "64, 224, 208", category: "jewel" },
            { name: {fa: "مروارید", en: "Pearl"}, hex: "#FDEEF4", rgb: "253, 238, 244", category: "jewel" },
            { name: {fa: "عقیق", en: "Agate"}, hex: "#B4B46A", rgb: "180, 180, 106", category: "jewel" },
            { name: {fa: "الماس", en: "Diamond"}, hex: "#B9F2FF", rgb: "185, 242, 255", category: "jewel" },
            { name: {fa: "یاقوت سرخ", en: "Garnet"}, hex: "#733635", rgb: "115, 54, 53", category: "jewel" },
            { name: {fa: "زبرجد", en: "Peridot"}, hex: "#E6E200", rgb: "230, 226, 0", category: "jewel" },
            { name: {fa: "توپاز", en: "Topaz"}, hex: "#FFC87C", rgb: "255, 200, 124", category: "jewel" },
            { name: {fa: "آکوامارین", en: "Aquamarine"}, hex: "#7FFFD4", rgb: "127, 255, 212", category: "jewel" },
            { name: {fa: "اوپال", en: "Opal"}, hex: "#A8C3BC", rgb: "168, 195, 188", category: "jewel" },
            { name: {fa: "یاقوت کبود", en: "Sapphire Blue"}, hex: "#0F52BA", rgb: "15, 82, 186", category: "jewel" },
            { name: {fa: "زمرد سبز", en: "Emerald Green"}, hex: "#50C878", rgb: "80, 200, 120", category: "jewel" },
            { name: {fa: "یاقوت قرمز", en: "Ruby Red"}, hex: "#E0115F", rgb: "224, 17, 95", category: "jewel" },
            { name: {fa: "آمیتیست بنفش", en: "Amethyst Purple"}, hex: "#9966CC", rgb: "153, 102, 204", category: "jewel" },
            { name: {fa: "کهربا زرد", en: "Amber Yellow"}, hex: "#FFBF00", rgb: "255, 191, 0", category: "jewel" },
            { name: {fa: "فیروزه آبی", en: "Turquoise Blue"}, hex: "#40E0D0", rgb: "64, 224, 208", category: "jewel" }
        ];

        // مدیریت زبان
        let currentLang = 'fa';

        function switchLanguage(lang) {
            currentLang = lang;
            
            // تغییر جهت صفحه
            document.body.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
            
            // نمایش/مخفی کردن عناصر بر اساس زبان
            document.querySelectorAll('[data-lang]').forEach(el => {
                if (el.getAttribute('data-lang') === lang) {
                    el.style.display = '';
                } else {
                    el.style.display = 'none';
                }
            });
            
            // به‌روزرسانی placeholder جستجو
            const searchInput = document.getElementById('color-search');
            if (lang === 'fa') {
                searchInput.placeholder = "جستجوی رنگ بر اساس نام یا کد...";
            } else {
                searchInput.placeholder = "Search colors by name or code...";
            }
            
            // به‌روزرسانی دکمه زبان
            document.getElementById('lang-toggle').innerHTML = 
                lang === 'fa' ? '<i class="fas fa-language"></i> EN' : '<i class="fas fa-language"></i> FA';
            
            // نمایش مجدد رنگ‌ها با زبان جدید
            const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
            const searchTerm = document.getElementById('color-search').value;
            displayColors(activeCategory, searchTerm);
        }

        // تابع برای کپی کردن کد HEX
        function copyToClipboard(text) {
            const tempInput = document.createElement('input');
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        }

        // تابع برای نمایش رنگ‌ها
        function displayColors(filter = "all", searchTerm = "") {
            const container = document.getElementById("colors-container");
            container.innerHTML = "";
            
            let filteredColors = colors;
            
            // اعمال فیلتر دسته‌بندی
            if (filter !== "all") {
                filteredColors = filteredColors.filter(color => color.category === filter);
            }
            
            // اعمال فیلتر جستجو
            if (searchTerm) {
                const term = searchTerm.toLowerCase();
                filteredColors = filteredColors.filter(color => 
                    color.name.fa.toLowerCase().includes(term) || 
                    color.name.en.toLowerCase().includes(term) ||
                    color.hex.toLowerCase().includes(term)
                );
            }
            
            // به‌روزرسانی شمارنده
            document.getElementById("count").textContent = filteredColors.length;
            document.getElementById("total").textContent = colors.length;
            document.getElementById("count-en").textContent = filteredColors.length;
            document.getElementById("total-en").textContent = colors.length;
            
            // نمایش رنگ‌ها
            filteredColors.forEach(color => {
                const colorCard = document.createElement("div");
                colorCard.className = "color-card fade-in";
                
                // ایجاد پیام کپی بر اساس زبان فعلی
                const copyMessage = currentLang === 'fa' ? 'کپی شد!' : 'Copied!';
                
                colorCard.innerHTML = `
                    <div class="color-preview" style="background-color: ${color.hex};">
                        <div class="copy-notification">${copyMessage}</div>
                    </div>
                    <div class="color-info">
                        <div class="color-name">${color.name[currentLang]}</div>
                        <div class="color-hex">${color.hex}</div>
                        <div class="color-rgb">RGB: ${color.rgb}</div>
                    </div>
                `;
                
                // اضافه کردن event listener برای کپی کردن
                colorCard.addEventListener('click', function() {
                    copyToClipboard(color.hex);
                    
                    // نمایش اعلان کپی
                    this.classList.add('copied');
                    setTimeout(() => {
                        this.classList.remove('copied');
                    }, 1500);
                });
                
                container.appendChild(colorCard);
            });
        }

        // فیلتر کردن بر اساس دسته‌بندی
        document.querySelectorAll(".category-btn").forEach(button => {
            button.addEventListener("click", function() {
                if (this.getAttribute('data-lang') !== currentLang) return;
                
                document.querySelectorAll(".category-btn").forEach(btn => {
                    if (btn.getAttribute('data-lang') === currentLang) {
                        btn.classList.remove("active");
                    }
                });
                this.classList.add("active");
                
                const category = this.getAttribute("data-category");
                const searchTerm = document.getElementById("color-search").value;
                displayColors(category, searchTerm);
            });
        });

        // جستجوی رنگ‌ها
        document.getElementById("color-search").addEventListener("input", function() {
            const searchTerm = this.value;
            const activeCategory = document.querySelector(`.category-btn.active[data-lang="${currentLang}"]`).getAttribute("data-category");
            displayColors(activeCategory, searchTerm);
        });

        // فیلتر کردن از طریق فوتر
        document.querySelectorAll(".footer-column a[data-category]").forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const category = this.getAttribute("data-category");
                
                document.querySelectorAll(".category-btn").forEach(btn => {
                    if (btn.getAttribute('data-lang') === currentLang) {
                        btn.classList.remove("active");
                    }
                });
                
                document.querySelector(`.category-btn[data-category="${category}"][data-lang="${currentLang}"]`).classList.add("active");
                
                displayColors(category);
                
                // اسکرول به بخش رنگ‌ها
                document.getElementById("colors").scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // بارگذاری اولیه رنگ‌ها
        document.addEventListener("DOMContentLoaded", function() {
            displayColors();
            
            // تنظیم زبان اولیه
            switchLanguage('fa');
            
            // event listener برای تغییر زبان
            document.getElementById('lang-toggle').addEventListener('click', function() {
                const newLang = currentLang === 'fa' ? 'en' : 'fa';
                switchLanguage(newLang);
            });
            
            // انیمیشن اسکرول نرم
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
            
            // انیمیشن برای عناصر هنگام اسکرول
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.info-card, .color-card').forEach(el => {
                observer.observe(el);
            });
        });