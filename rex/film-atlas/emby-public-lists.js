WidgetMetadata = {
  "id": "org.ffinly.publiclists.rex",
  "title": "片场 · 电影与剧集完整榜单",
  "version": "1.1.0",
  "requiredVersion": "0.0.1",
  "description": "浏览 emby-collection-sync 公布的 TMDB 榜单：六个梯队分组、豆瓣电影28类和电视剧10类。仅提供榜单，详情使用 rex 内置 TMDB。",
  "author": "Community",
  "site": "https://github.com/ffinly/emby-collection-sync",
  "globalParams": [
    {
      "name": "apiKey",
      "title": "TMDB API Key（可选）",
      "type": "input",
      "description": "留空使用 rex 内置 TMDB；若列表提示 v4 回退，请填写你自己的 TMDB v3 API Key。"
    }
  ],
  "modules": [
    {
      "id": "tier12",
      "title": "第一/二梯队 · 大众必看与影史殿堂",
      "functionName": "loadRankings",
      "cacheDuration": 1800,
      "params": [
        {
          "name": "group",
          "title": "分组",
          "type": "constant",
          "value": "tier12"
        },
        {
          "name": "listId",
          "title": "榜单",
          "type": "enumeration",
          "value": "8647021",
          "enumOptions": [
            {
              "title": "IMDb Top 250 Movies",
              "value": "8647021"
            },
            {
              "title": "IMDb Top 250 TV Shows",
              "value": "8647022"
            },
            {
              "title": "豆瓣电影 Top 250",
              "value": "8647023"
            },
            {
              "title": "S&S Directors - Greatest Films",
              "value": "8649058"
            },
            {
              "title": "S&S Critics - Greatest Films",
              "value": "8649050"
            },
            {
              "title": "AFI Top 100 (2007)",
              "value": "8649041"
            },
            {
              "title": "NYT - 100 Best Movies of the 21st Century (2025)",
              "value": "8701141"
            },
            {
              "title": "NYT - 100 Best TV Shows of the 21st Century (2026)",
              "value": "8701142"
            }
          ]
        },
        {
          "name": "language",
          "title": "显示语言",
          "type": "language",
          "value": "zh-CN"
        },
        {
          "name": "mode",
          "title": "加载方式",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "完整榜单（自动获取全部页）",
              "value": "all"
            },
            {
              "title": "分页加载（每次一页）",
              "value": "paged"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "tier3",
      "title": "第三梯队 · 全球电影大奖",
      "functionName": "loadRankings",
      "cacheDuration": 1800,
      "params": [
        {
          "name": "group",
          "title": "分组",
          "type": "constant",
          "value": "tier3"
        },
        {
          "name": "listId",
          "title": "榜单",
          "type": "enumeration",
          "value": "8648843",
          "enumOptions": [
            {
              "title": "奥斯卡历届最佳影片",
              "value": "8648843"
            },
            {
              "title": "戛纳电影节金棕榈奖",
              "value": "8648844"
            },
            {
              "title": "英国电影学院奖最佳影片",
              "value": "8648848"
            },
            {
              "title": "金球奖最佳剧情片",
              "value": "8648849"
            },
            {
              "title": "金球奖最佳音乐/喜剧片",
              "value": "8648850"
            },
            {
              "title": "独立精神奖最佳长片",
              "value": "8648851"
            },
            {
              "title": "柏林电影节金熊奖",
              "value": "8648852"
            },
            {
              "title": "威尼斯电影节金狮奖",
              "value": "8648854"
            },
            {
              "title": "多伦多电影节人民选择奖",
              "value": "8648855"
            }
          ]
        },
        {
          "name": "language",
          "title": "显示语言",
          "type": "language",
          "value": "zh-CN"
        },
        {
          "name": "mode",
          "title": "加载方式",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "完整榜单（自动获取全部页）",
              "value": "all"
            },
            {
              "title": "分页加载（每次一页）",
              "value": "paged"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "tier4",
      "title": "第四梯队 · 影迷社区与名家策展",
      "functionName": "loadRankings",
      "cacheDuration": 1800,
      "params": [
        {
          "name": "group",
          "title": "分组",
          "type": "constant",
          "value": "tier4"
        },
        {
          "name": "listId",
          "title": "榜单",
          "type": "enumeration",
          "value": "8648802",
          "enumOptions": [
            {
              "title": "LB Top 500 Films",
              "value": "8648802"
            },
            {
              "title": "LB Top 250 Films with the Most Fans",
              "value": "8649224"
            },
            {
              "title": "LB Top 250 Animated Films",
              "value": "8649225"
            },
            {
              "title": "LB Top 250 Documentary Films",
              "value": "8649231"
            },
            {
              "title": "Roger Ebert's Great Movies",
              "value": "8649219"
            }
          ]
        },
        {
          "name": "language",
          "title": "显示语言",
          "type": "language",
          "value": "zh-CN"
        },
        {
          "name": "mode",
          "title": "加载方式",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "完整榜单（自动获取全部页）",
              "value": "all"
            },
            {
              "title": "分页加载（每次一页）",
              "value": "paged"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "tier5",
      "title": "第五梯队 · 影史大榜与收藏",
      "functionName": "loadRankings",
      "cacheDuration": 1800,
      "params": [
        {
          "name": "group",
          "title": "分组",
          "type": "constant",
          "value": "tier5"
        },
        {
          "name": "listId",
          "title": "榜单",
          "type": "enumeration",
          "value": "8648821",
          "enumOptions": [
            {
              "title": "TSPDT - 1000 Greatest Films",
              "value": "8648821"
            },
            {
              "title": "1001 Movies You Must See Before You Die",
              "value": "8649029"
            },
            {
              "title": "Criterion Collection",
              "value": "8649108"
            }
          ]
        },
        {
          "name": "language",
          "title": "显示语言",
          "type": "language",
          "value": "zh-CN"
        },
        {
          "name": "mode",
          "title": "加载方式",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "完整榜单（自动获取全部页）",
              "value": "all"
            },
            {
              "title": "分页加载（每次一页）",
              "value": "paged"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "tier6",
      "title": "第六梯队 · 独立与流行厂牌",
      "functionName": "loadRankings",
      "cacheDuration": 1800,
      "params": [
        {
          "name": "group",
          "title": "分组",
          "type": "constant",
          "value": "tier6"
        },
        {
          "name": "listId",
          "title": "榜单",
          "type": "enumeration",
          "value": "8649217",
          "enumOptions": [
            {
              "title": "Every A24 Film",
              "value": "8649217"
            },
            {
              "title": "Every NEON Film",
              "value": "8649218"
            },
            {
              "title": "Every MUBI Film",
              "value": "8649220"
            }
          ]
        },
        {
          "name": "language",
          "title": "显示语言",
          "type": "language",
          "value": "zh-CN"
        },
        {
          "name": "mode",
          "title": "加载方式",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "完整榜单（自动获取全部页）",
              "value": "all"
            },
            {
              "title": "分页加载（每次一页）",
              "value": "paged"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "tier7",
      "title": "第七梯队 · 实时口碑与趋势",
      "functionName": "loadRankings",
      "cacheDuration": 1800,
      "params": [
        {
          "name": "group",
          "title": "分组",
          "type": "constant",
          "value": "tier7"
        },
        {
          "name": "listId",
          "title": "榜单",
          "type": "enumeration",
          "value": "8648547",
          "enumOptions": [
            {
              "title": "豆瓣 - 一周口碑电影榜",
              "value": "8648547"
            },
            {
              "title": "豆瓣 - 华语口碑剧集榜",
              "value": "8648548"
            },
            {
              "title": "豆瓣 - 全球口碑剧集榜",
              "value": "8648549"
            },
            {
              "title": "豆瓣 - 实时热门电影榜",
              "value": "8648550"
            },
            {
              "title": "豆瓣 - 实时热门电视榜",
              "value": "8648551"
            },
            {
              "title": "TMDB - 热门电影榜",
              "value": "8706223"
            },
            {
              "title": "TMDB - 热门剧集榜",
              "value": "8706224"
            },
            {
              "title": "TMDB - 本周趋势电影榜",
              "value": "8706225"
            },
            {
              "title": "TMDB - 本周趋势剧集榜",
              "value": "8706226"
            }
          ]
        },
        {
          "name": "language",
          "title": "显示语言",
          "type": "language",
          "value": "zh-CN"
        },
        {
          "name": "mode",
          "title": "加载方式",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "完整榜单（自动获取全部页）",
              "value": "all"
            },
            {
              "title": "分页加载（每次一页）",
              "value": "paged"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "doubanMovies",
      "title": "豆瓣电影 · 类型与维度",
      "functionName": "loadDoubanMovies",
      "cacheDuration": 1800,
      "params": [
        {
          "name": "category",
          "title": "电影类型",
          "type": "enumeration",
          "value": "剧情",
          "enumOptions": [
            {
              "title": "剧情",
              "value": "剧情"
            },
            {
              "title": "喜剧",
              "value": "喜剧"
            },
            {
              "title": "动作",
              "value": "动作"
            },
            {
              "title": "爱情",
              "value": "爱情"
            },
            {
              "title": "科幻",
              "value": "科幻"
            },
            {
              "title": "动画",
              "value": "动画"
            },
            {
              "title": "悬疑",
              "value": "悬疑"
            },
            {
              "title": "惊悚",
              "value": "惊悚"
            },
            {
              "title": "恐怖",
              "value": "恐怖"
            },
            {
              "title": "纪录片",
              "value": "纪录片"
            },
            {
              "title": "短片",
              "value": "短片"
            },
            {
              "title": "情色",
              "value": "情色"
            },
            {
              "title": "音乐",
              "value": "音乐"
            },
            {
              "title": "歌舞",
              "value": "歌舞"
            },
            {
              "title": "家庭",
              "value": "家庭"
            },
            {
              "title": "儿童",
              "value": "儿童"
            },
            {
              "title": "传记",
              "value": "传记"
            },
            {
              "title": "历史",
              "value": "历史"
            },
            {
              "title": "战争",
              "value": "战争"
            },
            {
              "title": "犯罪",
              "value": "犯罪"
            },
            {
              "title": "西部",
              "value": "西部"
            },
            {
              "title": "奇幻",
              "value": "奇幻"
            },
            {
              "title": "冒险",
              "value": "冒险"
            },
            {
              "title": "灾难",
              "value": "灾难"
            },
            {
              "title": "武侠",
              "value": "武侠"
            },
            {
              "title": "古装",
              "value": "古装"
            },
            {
              "title": "运动",
              "value": "运动"
            },
            {
              "title": "黑色电影",
              "value": "黑色电影"
            }
          ]
        },
        {
          "name": "list_0",
          "title": "剧情 · 榜单",
          "type": "enumeration",
          "value": "8647681",
          "belongTo": {
            "paramName": "category",
            "value": [
              "剧情"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647681"
            },
            {
              "title": "高分经典",
              "value": "8648565"
            }
          ]
        },
        {
          "name": "list_1",
          "title": "喜剧 · 榜单",
          "type": "enumeration",
          "value": "8647682",
          "belongTo": {
            "paramName": "category",
            "value": [
              "喜剧"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648552"
            },
            {
              "title": "Top 20",
              "value": "8647682"
            },
            {
              "title": "高分经典",
              "value": "8648566"
            },
            {
              "title": "冷门佳作",
              "value": "8648595"
            }
          ]
        },
        {
          "name": "list_2",
          "title": "动作 · 榜单",
          "type": "enumeration",
          "value": "8647683",
          "belongTo": {
            "paramName": "category",
            "value": [
              "动作"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648555"
            },
            {
              "title": "Top 20",
              "value": "8647683"
            },
            {
              "title": "高分经典",
              "value": "8648568"
            },
            {
              "title": "冷门佳作",
              "value": "8648597"
            }
          ]
        },
        {
          "name": "list_3",
          "title": "爱情 · 榜单",
          "type": "enumeration",
          "value": "8647684",
          "belongTo": {
            "paramName": "category",
            "value": [
              "爱情"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648553"
            },
            {
              "title": "Top 20",
              "value": "8647684"
            },
            {
              "title": "高分经典",
              "value": "8648567"
            },
            {
              "title": "冷门佳作",
              "value": "8648596"
            }
          ]
        },
        {
          "name": "list_4",
          "title": "科幻 · 榜单",
          "type": "enumeration",
          "value": "8647685",
          "belongTo": {
            "paramName": "category",
            "value": [
              "科幻"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648556"
            },
            {
              "title": "Top 20",
              "value": "8647685"
            },
            {
              "title": "高分经典",
              "value": "8648570"
            },
            {
              "title": "冷门佳作",
              "value": "8648598"
            }
          ]
        },
        {
          "name": "list_5",
          "title": "动画 · 榜单",
          "type": "enumeration",
          "value": "8647686",
          "belongTo": {
            "paramName": "category",
            "value": [
              "动画"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648557"
            },
            {
              "title": "Top 20",
              "value": "8647686"
            },
            {
              "title": "高分经典",
              "value": "8648571"
            },
            {
              "title": "冷门佳作",
              "value": "8648599"
            }
          ]
        },
        {
          "name": "list_6",
          "title": "悬疑 · 榜单",
          "type": "enumeration",
          "value": "8647687",
          "belongTo": {
            "paramName": "category",
            "value": [
              "悬疑"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648558"
            },
            {
              "title": "Top 20",
              "value": "8647687"
            },
            {
              "title": "高分经典",
              "value": "8648572"
            },
            {
              "title": "冷门佳作",
              "value": "8648600"
            }
          ]
        },
        {
          "name": "list_7",
          "title": "惊悚 · 榜单",
          "type": "enumeration",
          "value": "8647688",
          "belongTo": {
            "paramName": "category",
            "value": [
              "惊悚"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648560"
            },
            {
              "title": "Top 20",
              "value": "8647688"
            },
            {
              "title": "高分经典",
              "value": "8648574"
            },
            {
              "title": "冷门佳作",
              "value": "8648602"
            }
          ]
        },
        {
          "name": "list_8",
          "title": "恐怖 · 榜单",
          "type": "enumeration",
          "value": "8647689",
          "belongTo": {
            "paramName": "category",
            "value": [
              "恐怖"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648562"
            },
            {
              "title": "Top 20",
              "value": "8647689"
            },
            {
              "title": "高分经典",
              "value": "8648581"
            },
            {
              "title": "冷门佳作",
              "value": "8648607"
            }
          ]
        },
        {
          "name": "list_9",
          "title": "纪录片 · 榜单",
          "type": "enumeration",
          "value": "8647690",
          "belongTo": {
            "paramName": "category",
            "value": [
              "纪录片"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647690"
            }
          ]
        },
        {
          "name": "list_10",
          "title": "短片 · 榜单",
          "type": "enumeration",
          "value": "8647691",
          "belongTo": {
            "paramName": "category",
            "value": [
              "短片"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647691"
            }
          ]
        },
        {
          "name": "list_11",
          "title": "情色 · 榜单",
          "type": "enumeration",
          "value": "8647692",
          "belongTo": {
            "paramName": "category",
            "value": [
              "情色"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647692"
            },
            {
              "title": "高分经典",
              "value": "8648586"
            },
            {
              "title": "冷门佳作",
              "value": "8648612"
            }
          ]
        },
        {
          "name": "list_12",
          "title": "音乐 · 榜单",
          "type": "enumeration",
          "value": "8647693",
          "belongTo": {
            "paramName": "category",
            "value": [
              "音乐"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647693"
            },
            {
              "title": "高分经典",
              "value": "8648578"
            },
            {
              "title": "冷门佳作",
              "value": "8648604"
            }
          ]
        },
        {
          "name": "list_13",
          "title": "歌舞 · 榜单",
          "type": "enumeration",
          "value": "8647694",
          "belongTo": {
            "paramName": "category",
            "value": [
              "歌舞"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647694"
            },
            {
              "title": "高分经典",
              "value": "8648584"
            },
            {
              "title": "冷门佳作",
              "value": "8648610"
            }
          ]
        },
        {
          "name": "list_14",
          "title": "家庭 · 榜单",
          "type": "enumeration",
          "value": "8647695",
          "belongTo": {
            "paramName": "category",
            "value": [
              "家庭"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647695"
            },
            {
              "title": "高分经典",
              "value": "8648576"
            }
          ]
        },
        {
          "name": "list_15",
          "title": "儿童 · 榜单",
          "type": "enumeration",
          "value": "8647696",
          "belongTo": {
            "paramName": "category",
            "value": [
              "儿童"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647696"
            },
            {
              "title": "高分经典",
              "value": "8648577"
            }
          ]
        },
        {
          "name": "list_16",
          "title": "传记 · 榜单",
          "type": "enumeration",
          "value": "8647697",
          "belongTo": {
            "paramName": "category",
            "value": [
              "传记"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648564"
            },
            {
              "title": "Top 20",
              "value": "8647697"
            },
            {
              "title": "高分经典",
              "value": "8648583"
            },
            {
              "title": "冷门佳作",
              "value": "8648609"
            }
          ]
        },
        {
          "name": "list_17",
          "title": "历史 · 榜单",
          "type": "enumeration",
          "value": "8647698",
          "belongTo": {
            "paramName": "category",
            "value": [
              "历史"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647698"
            },
            {
              "title": "高分经典",
              "value": "8648579"
            },
            {
              "title": "冷门佳作",
              "value": "8648605"
            }
          ]
        },
        {
          "name": "list_18",
          "title": "战争 · 榜单",
          "type": "enumeration",
          "value": "8647699",
          "belongTo": {
            "paramName": "category",
            "value": [
              "战争"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648563"
            },
            {
              "title": "Top 20",
              "value": "8647699"
            },
            {
              "title": "高分经典",
              "value": "8648582"
            },
            {
              "title": "冷门佳作",
              "value": "8648608"
            }
          ]
        },
        {
          "name": "list_19",
          "title": "犯罪 · 榜单",
          "type": "enumeration",
          "value": "8647700",
          "belongTo": {
            "paramName": "category",
            "value": [
              "犯罪"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648559"
            },
            {
              "title": "Top 20",
              "value": "8647700"
            },
            {
              "title": "高分经典",
              "value": "8648573"
            },
            {
              "title": "冷门佳作",
              "value": "8648601"
            }
          ]
        },
        {
          "name": "list_20",
          "title": "西部 · 榜单",
          "type": "enumeration",
          "value": "8647702",
          "belongTo": {
            "paramName": "category",
            "value": [
              "西部"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647702"
            },
            {
              "title": "高分经典",
              "value": "8648588"
            }
          ]
        },
        {
          "name": "list_21",
          "title": "奇幻 · 榜单",
          "type": "enumeration",
          "value": "8647703",
          "belongTo": {
            "paramName": "category",
            "value": [
              "奇幻"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647703"
            },
            {
              "title": "高分经典",
              "value": "8648580"
            },
            {
              "title": "冷门佳作",
              "value": "8648606"
            }
          ]
        },
        {
          "name": "list_22",
          "title": "冒险 · 榜单",
          "type": "enumeration",
          "value": "8647704",
          "belongTo": {
            "paramName": "category",
            "value": [
              "冒险"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8648561"
            },
            {
              "title": "Top 20",
              "value": "8647704"
            },
            {
              "title": "高分经典",
              "value": "8648575"
            },
            {
              "title": "冷门佳作",
              "value": "8648603"
            }
          ]
        },
        {
          "name": "list_23",
          "title": "灾难 · 榜单",
          "type": "enumeration",
          "value": "8647705",
          "belongTo": {
            "paramName": "category",
            "value": [
              "灾难"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647705"
            },
            {
              "title": "高分经典",
              "value": "8648587"
            },
            {
              "title": "冷门佳作",
              "value": "8648613"
            }
          ]
        },
        {
          "name": "list_24",
          "title": "武侠 · 榜单",
          "type": "enumeration",
          "value": "8647706",
          "belongTo": {
            "paramName": "category",
            "value": [
              "武侠"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647706"
            },
            {
              "title": "高分经典",
              "value": "8648585"
            },
            {
              "title": "冷门佳作",
              "value": "8648611"
            }
          ]
        },
        {
          "name": "list_25",
          "title": "古装 · 榜单",
          "type": "enumeration",
          "value": "8647707",
          "belongTo": {
            "paramName": "category",
            "value": [
              "古装"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647707"
            },
            {
              "title": "高分经典",
              "value": "8648593"
            }
          ]
        },
        {
          "name": "list_26",
          "title": "运动 · 榜单",
          "type": "enumeration",
          "value": "8647708",
          "belongTo": {
            "paramName": "category",
            "value": [
              "运动"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647708"
            },
            {
              "title": "高分经典",
              "value": "8648594"
            }
          ]
        },
        {
          "name": "list_27",
          "title": "黑色电影 · 榜单",
          "type": "enumeration",
          "value": "8647709",
          "belongTo": {
            "paramName": "category",
            "value": [
              "黑色电影"
            ]
          },
          "enumOptions": [
            {
              "title": "Top 20",
              "value": "8647709"
            }
          ]
        },
        {
          "name": "language",
          "title": "显示语言",
          "type": "language",
          "value": "zh-CN"
        },
        {
          "name": "mode",
          "title": "加载方式",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "完整榜单（自动获取全部页）",
              "value": "all"
            },
            {
              "title": "分页加载（每次一页）",
              "value": "paged"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    },
    {
      "id": "doubanTV",
      "title": "豆瓣电视剧 · 地区与类型",
      "functionName": "loadDoubanTV",
      "cacheDuration": 1800,
      "params": [
        {
          "name": "category",
          "title": "地区 / 类型",
          "type": "enumeration",
          "value": "大陆剧",
          "enumOptions": [
            {
              "title": "大陆剧",
              "value": "大陆剧"
            },
            {
              "title": "美剧",
              "value": "美剧"
            },
            {
              "title": "英剧",
              "value": "英剧"
            },
            {
              "title": "日剧",
              "value": "日剧"
            },
            {
              "title": "韩剧",
              "value": "韩剧"
            },
            {
              "title": "港剧",
              "value": "港剧"
            },
            {
              "title": "台剧",
              "value": "台剧"
            },
            {
              "title": "泰剧",
              "value": "泰剧"
            },
            {
              "title": "欧洲剧",
              "value": "欧洲剧"
            },
            {
              "title": "动画剧集",
              "value": "动画剧集"
            }
          ]
        },
        {
          "name": "list_0",
          "title": "大陆剧 · 榜单",
          "type": "enumeration",
          "value": "8702683",
          "belongTo": {
            "paramName": "category",
            "value": [
              "大陆剧"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8702683"
            },
            {
              "title": "高分经典",
              "value": "8702684"
            },
            {
              "title": "冷门佳作",
              "value": "8702685"
            }
          ]
        },
        {
          "name": "list_1",
          "title": "美剧 · 榜单",
          "type": "enumeration",
          "value": "8702686",
          "belongTo": {
            "paramName": "category",
            "value": [
              "美剧"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8702686"
            },
            {
              "title": "高分经典",
              "value": "8702687"
            },
            {
              "title": "冷门佳作",
              "value": "8702688"
            }
          ]
        },
        {
          "name": "list_2",
          "title": "英剧 · 榜单",
          "type": "enumeration",
          "value": "8702689",
          "belongTo": {
            "paramName": "category",
            "value": [
              "英剧"
            ]
          },
          "enumOptions": [
            {
              "title": "高分经典",
              "value": "8702689"
            },
            {
              "title": "冷门佳作",
              "value": "8702690"
            }
          ]
        },
        {
          "name": "list_3",
          "title": "日剧 · 榜单",
          "type": "enumeration",
          "value": "8702691",
          "belongTo": {
            "paramName": "category",
            "value": [
              "日剧"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8702691"
            },
            {
              "title": "高分经典",
              "value": "8702692"
            },
            {
              "title": "冷门佳作",
              "value": "8702693"
            }
          ]
        },
        {
          "name": "list_4",
          "title": "韩剧 · 榜单",
          "type": "enumeration",
          "value": "8702694",
          "belongTo": {
            "paramName": "category",
            "value": [
              "韩剧"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8702694"
            },
            {
              "title": "高分经典",
              "value": "8702695"
            },
            {
              "title": "冷门佳作",
              "value": "8702696"
            }
          ]
        },
        {
          "name": "list_5",
          "title": "港剧 · 榜单",
          "type": "enumeration",
          "value": "8702697",
          "belongTo": {
            "paramName": "category",
            "value": [
              "港剧"
            ]
          },
          "enumOptions": [
            {
              "title": "高分经典",
              "value": "8702697"
            },
            {
              "title": "冷门佳作",
              "value": "8702698"
            }
          ]
        },
        {
          "name": "list_6",
          "title": "台剧 · 榜单",
          "type": "enumeration",
          "value": "8702699",
          "belongTo": {
            "paramName": "category",
            "value": [
              "台剧"
            ]
          },
          "enumOptions": [
            {
              "title": "高分经典",
              "value": "8702699"
            },
            {
              "title": "冷门佳作",
              "value": "8702700"
            }
          ]
        },
        {
          "name": "list_7",
          "title": "泰剧 · 榜单",
          "type": "enumeration",
          "value": "8702701",
          "belongTo": {
            "paramName": "category",
            "value": [
              "泰剧"
            ]
          },
          "enumOptions": [
            {
              "title": "冷门佳作",
              "value": "8702701"
            }
          ]
        },
        {
          "name": "list_8",
          "title": "欧洲剧 · 榜单",
          "type": "enumeration",
          "value": "8702702",
          "belongTo": {
            "paramName": "category",
            "value": [
              "欧洲剧"
            ]
          },
          "enumOptions": [
            {
              "title": "近期热门",
              "value": "8702702"
            },
            {
              "title": "高分经典",
              "value": "8702703"
            }
          ]
        },
        {
          "name": "list_9",
          "title": "动画剧集 · 榜单",
          "type": "enumeration",
          "value": "8702704",
          "belongTo": {
            "paramName": "category",
            "value": [
              "动画剧集"
            ]
          },
          "enumOptions": [
            {
              "title": "高分经典",
              "value": "8702704"
            }
          ]
        },
        {
          "name": "language",
          "title": "显示语言",
          "type": "language",
          "value": "zh-CN"
        },
        {
          "name": "mode",
          "title": "加载方式",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "完整榜单（自动获取全部页）",
              "value": "all"
            },
            {
              "title": "分页加载（每次一页）",
              "value": "paged"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page"
        }
      ]
    }
  ]
};

// Catalog snapshot: 2026-10-29. Source: https://github.com/ffinly/emby-collection-sync
var PUBLIC_LIST_CATALOG = {
  "tier12": [
    {
      "title": "IMDb Top 250 Movies",
      "id": "8647021",
      "mediaType": "movie"
    },
    {
      "title": "IMDb Top 250 TV Shows",
      "id": "8647022",
      "mediaType": "tv"
    },
    {
      "title": "豆瓣电影 Top 250",
      "id": "8647023",
      "mediaType": "movie"
    },
    {
      "title": "S&S Directors - Greatest Films",
      "id": "8649058",
      "mediaType": "movie"
    },
    {
      "title": "S&S Critics - Greatest Films",
      "id": "8649050",
      "mediaType": "movie"
    },
    {
      "title": "AFI Top 100 (2007)",
      "id": "8649041",
      "mediaType": "movie"
    },
    {
      "title": "NYT - 100 Best Movies of the 21st Century (2025)",
      "id": "8701141",
      "mediaType": "movie"
    },
    {
      "title": "NYT - 100 Best TV Shows of the 21st Century (2026)",
      "id": "8701142",
      "mediaType": "tv"
    }
  ],
  "tier3": [
    {
      "title": "奥斯卡历届最佳影片",
      "id": "8648843",
      "mediaType": "movie"
    },
    {
      "title": "戛纳电影节金棕榈奖",
      "id": "8648844",
      "mediaType": "movie"
    },
    {
      "title": "英国电影学院奖最佳影片",
      "id": "8648848",
      "mediaType": "movie"
    },
    {
      "title": "金球奖最佳剧情片",
      "id": "8648849",
      "mediaType": "movie"
    },
    {
      "title": "金球奖最佳音乐/喜剧片",
      "id": "8648850",
      "mediaType": "movie"
    },
    {
      "title": "独立精神奖最佳长片",
      "id": "8648851",
      "mediaType": "movie"
    },
    {
      "title": "柏林电影节金熊奖",
      "id": "8648852",
      "mediaType": "movie"
    },
    {
      "title": "威尼斯电影节金狮奖",
      "id": "8648854",
      "mediaType": "movie"
    },
    {
      "title": "多伦多电影节人民选择奖",
      "id": "8648855",
      "mediaType": "movie"
    }
  ],
  "tier4": [
    {
      "title": "LB Top 500 Films",
      "id": "8648802",
      "mediaType": "movie"
    },
    {
      "title": "LB Top 250 Films with the Most Fans",
      "id": "8649224",
      "mediaType": "movie"
    },
    {
      "title": "LB Top 250 Animated Films",
      "id": "8649225",
      "mediaType": "movie"
    },
    {
      "title": "LB Top 250 Documentary Films",
      "id": "8649231",
      "mediaType": "movie"
    },
    {
      "title": "Roger Ebert's Great Movies",
      "id": "8649219",
      "mediaType": "movie"
    }
  ],
  "tier5": [
    {
      "title": "TSPDT - 1000 Greatest Films",
      "id": "8648821",
      "mediaType": "movie"
    },
    {
      "title": "1001 Movies You Must See Before You Die",
      "id": "8649029",
      "mediaType": "movie"
    },
    {
      "title": "Criterion Collection",
      "id": "8649108",
      "mediaType": "movie"
    }
  ],
  "tier6": [
    {
      "title": "Every A24 Film",
      "id": "8649217",
      "mediaType": "movie"
    },
    {
      "title": "Every NEON Film",
      "id": "8649218",
      "mediaType": "movie"
    },
    {
      "title": "Every MUBI Film",
      "id": "8649220",
      "mediaType": "movie"
    }
  ],
  "tier7": [
    {
      "title": "豆瓣 - 一周口碑电影榜",
      "id": "8648547",
      "mediaType": "movie"
    },
    {
      "title": "豆瓣 - 华语口碑剧集榜",
      "id": "8648548",
      "mediaType": "tv"
    },
    {
      "title": "豆瓣 - 全球口碑剧集榜",
      "id": "8648549",
      "mediaType": "tv"
    },
    {
      "title": "豆瓣 - 实时热门电影榜",
      "id": "8648550",
      "mediaType": "movie"
    },
    {
      "title": "豆瓣 - 实时热门电视榜",
      "id": "8648551",
      "mediaType": "tv"
    },
    {
      "title": "TMDB - 热门电影榜",
      "id": "8706223",
      "mediaType": "movie"
    },
    {
      "title": "TMDB - 热门剧集榜",
      "id": "8706224",
      "mediaType": "tv"
    },
    {
      "title": "TMDB - 本周趋势电影榜",
      "id": "8706225",
      "mediaType": "movie"
    },
    {
      "title": "TMDB - 本周趋势剧集榜",
      "id": "8706226",
      "mediaType": "tv"
    }
  ],
  "doubanMovies": [
    {
      "title": "剧情",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647681",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648565",
          "mediaType": "movie"
        }
      ],
      "param": "list_0",
      "default": "8647681"
    },
    {
      "title": "喜剧",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648552",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647682",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648566",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648595",
          "mediaType": "movie"
        }
      ],
      "param": "list_1",
      "default": "8647682"
    },
    {
      "title": "动作",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648555",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647683",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648568",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648597",
          "mediaType": "movie"
        }
      ],
      "param": "list_2",
      "default": "8647683"
    },
    {
      "title": "爱情",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648553",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647684",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648567",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648596",
          "mediaType": "movie"
        }
      ],
      "param": "list_3",
      "default": "8647684"
    },
    {
      "title": "科幻",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648556",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647685",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648570",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648598",
          "mediaType": "movie"
        }
      ],
      "param": "list_4",
      "default": "8647685"
    },
    {
      "title": "动画",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648557",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647686",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648571",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648599",
          "mediaType": "movie"
        }
      ],
      "param": "list_5",
      "default": "8647686"
    },
    {
      "title": "悬疑",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648558",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647687",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648572",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648600",
          "mediaType": "movie"
        }
      ],
      "param": "list_6",
      "default": "8647687"
    },
    {
      "title": "惊悚",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648560",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647688",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648574",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648602",
          "mediaType": "movie"
        }
      ],
      "param": "list_7",
      "default": "8647688"
    },
    {
      "title": "恐怖",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648562",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647689",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648581",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648607",
          "mediaType": "movie"
        }
      ],
      "param": "list_8",
      "default": "8647689"
    },
    {
      "title": "纪录片",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647690",
          "mediaType": "movie"
        }
      ],
      "param": "list_9",
      "default": "8647690"
    },
    {
      "title": "短片",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647691",
          "mediaType": "movie"
        }
      ],
      "param": "list_10",
      "default": "8647691"
    },
    {
      "title": "情色",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647692",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648586",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648612",
          "mediaType": "movie"
        }
      ],
      "param": "list_11",
      "default": "8647692"
    },
    {
      "title": "音乐",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647693",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648578",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648604",
          "mediaType": "movie"
        }
      ],
      "param": "list_12",
      "default": "8647693"
    },
    {
      "title": "歌舞",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647694",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648584",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648610",
          "mediaType": "movie"
        }
      ],
      "param": "list_13",
      "default": "8647694"
    },
    {
      "title": "家庭",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647695",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648576",
          "mediaType": "movie"
        }
      ],
      "param": "list_14",
      "default": "8647695"
    },
    {
      "title": "儿童",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647696",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648577",
          "mediaType": "movie"
        }
      ],
      "param": "list_15",
      "default": "8647696"
    },
    {
      "title": "传记",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648564",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647697",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648583",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648609",
          "mediaType": "movie"
        }
      ],
      "param": "list_16",
      "default": "8647697"
    },
    {
      "title": "历史",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647698",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648579",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648605",
          "mediaType": "movie"
        }
      ],
      "param": "list_17",
      "default": "8647698"
    },
    {
      "title": "战争",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648563",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647699",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648582",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648608",
          "mediaType": "movie"
        }
      ],
      "param": "list_18",
      "default": "8647699"
    },
    {
      "title": "犯罪",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648559",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647700",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648573",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648601",
          "mediaType": "movie"
        }
      ],
      "param": "list_19",
      "default": "8647700"
    },
    {
      "title": "西部",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647702",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648588",
          "mediaType": "movie"
        }
      ],
      "param": "list_20",
      "default": "8647702"
    },
    {
      "title": "奇幻",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647703",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648580",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648606",
          "mediaType": "movie"
        }
      ],
      "param": "list_21",
      "default": "8647703"
    },
    {
      "title": "冒险",
      "lists": [
        {
          "title": "近期热门",
          "id": "8648561",
          "mediaType": "movie"
        },
        {
          "title": "Top 20",
          "id": "8647704",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648575",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648603",
          "mediaType": "movie"
        }
      ],
      "param": "list_22",
      "default": "8647704"
    },
    {
      "title": "灾难",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647705",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648587",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648613",
          "mediaType": "movie"
        }
      ],
      "param": "list_23",
      "default": "8647705"
    },
    {
      "title": "武侠",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647706",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648585",
          "mediaType": "movie"
        },
        {
          "title": "冷门佳作",
          "id": "8648611",
          "mediaType": "movie"
        }
      ],
      "param": "list_24",
      "default": "8647706"
    },
    {
      "title": "古装",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647707",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648593",
          "mediaType": "movie"
        }
      ],
      "param": "list_25",
      "default": "8647707"
    },
    {
      "title": "运动",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647708",
          "mediaType": "movie"
        },
        {
          "title": "高分经典",
          "id": "8648594",
          "mediaType": "movie"
        }
      ],
      "param": "list_26",
      "default": "8647708"
    },
    {
      "title": "黑色电影",
      "lists": [
        {
          "title": "Top 20",
          "id": "8647709",
          "mediaType": "movie"
        }
      ],
      "param": "list_27",
      "default": "8647709"
    }
  ],
  "doubanTV": [
    {
      "title": "大陆剧",
      "lists": [
        {
          "title": "近期热门",
          "id": "8702683",
          "mediaType": "tv"
        },
        {
          "title": "高分经典",
          "id": "8702684",
          "mediaType": "tv"
        },
        {
          "title": "冷门佳作",
          "id": "8702685",
          "mediaType": "tv"
        }
      ],
      "param": "list_0",
      "default": "8702683"
    },
    {
      "title": "美剧",
      "lists": [
        {
          "title": "近期热门",
          "id": "8702686",
          "mediaType": "tv"
        },
        {
          "title": "高分经典",
          "id": "8702687",
          "mediaType": "tv"
        },
        {
          "title": "冷门佳作",
          "id": "8702688",
          "mediaType": "tv"
        }
      ],
      "param": "list_1",
      "default": "8702686"
    },
    {
      "title": "英剧",
      "lists": [
        {
          "title": "高分经典",
          "id": "8702689",
          "mediaType": "tv"
        },
        {
          "title": "冷门佳作",
          "id": "8702690",
          "mediaType": "tv"
        }
      ],
      "param": "list_2",
      "default": "8702689"
    },
    {
      "title": "日剧",
      "lists": [
        {
          "title": "近期热门",
          "id": "8702691",
          "mediaType": "tv"
        },
        {
          "title": "高分经典",
          "id": "8702692",
          "mediaType": "tv"
        },
        {
          "title": "冷门佳作",
          "id": "8702693",
          "mediaType": "tv"
        }
      ],
      "param": "list_3",
      "default": "8702691"
    },
    {
      "title": "韩剧",
      "lists": [
        {
          "title": "近期热门",
          "id": "8702694",
          "mediaType": "tv"
        },
        {
          "title": "高分经典",
          "id": "8702695",
          "mediaType": "tv"
        },
        {
          "title": "冷门佳作",
          "id": "8702696",
          "mediaType": "tv"
        }
      ],
      "param": "list_4",
      "default": "8702694"
    },
    {
      "title": "港剧",
      "lists": [
        {
          "title": "高分经典",
          "id": "8702697",
          "mediaType": "tv"
        },
        {
          "title": "冷门佳作",
          "id": "8702698",
          "mediaType": "tv"
        }
      ],
      "param": "list_5",
      "default": "8702697"
    },
    {
      "title": "台剧",
      "lists": [
        {
          "title": "高分经典",
          "id": "8702699",
          "mediaType": "tv"
        },
        {
          "title": "冷门佳作",
          "id": "8702700",
          "mediaType": "tv"
        }
      ],
      "param": "list_6",
      "default": "8702699"
    },
    {
      "title": "泰剧",
      "lists": [
        {
          "title": "冷门佳作",
          "id": "8702701",
          "mediaType": "tv"
        }
      ],
      "param": "list_7",
      "default": "8702701"
    },
    {
      "title": "欧洲剧",
      "lists": [
        {
          "title": "近期热门",
          "id": "8702702",
          "mediaType": "tv"
        },
        {
          "title": "高分经典",
          "id": "8702703",
          "mediaType": "tv"
        }
      ],
      "param": "list_8",
      "default": "8702702"
    },
    {
      "title": "动画剧集",
      "lists": [
        {
          "title": "高分经典",
          "id": "8702704",
          "mediaType": "tv"
        }
      ],
      "param": "list_9",
      "default": "8702704"
    }
  ]
};

// TMDB list adapters: built-in helper returns a body; Widget.http returns {data,status}.
function listPage(value) {
  var page = value === undefined || value === null || value === "" ? 1 : Number(value);
  if (!Number.isSafeInteger(page) || page < 1) throw new Error("页码必须是正整数");
  return page;
}

function selectRanking(params) {
  var lists = PUBLIC_LIST_CATALOG[params.group];
  if (!Array.isArray(lists) || !/^tier/.test(params.group)) throw new Error("无效的榜单分组");
  var id = params.listId == null || params.listId === "" ? lists[0].id : String(params.listId);
  var selected = lists.find(function (entry) { return entry.id === id; });
  if (!selected) throw new Error("所选榜单不属于当前分组，请重新选择");
  return selected;
}

function selectCategory(group, params) {
  var categories = PUBLIC_LIST_CATALOG[group];
  var name = params.category == null || params.category === "" ? categories[0].title : params.category;
  var category = categories.find(function (entry) { return entry.title === name; });
  if (!category) throw new Error("无效的豆瓣分类，请重新选择");
  var raw = params[category.param];
  var id = raw == null || raw === "" ? category.default : String(raw);
  var selected = category.lists.find(function (entry) { return entry.id === id; });
  if (!selected) throw new Error("该分类没有所选榜单，请重新选择");
  return selected;
}

function responseStatus(error) {
  return Number(error && (error.status || error.statusCode || (error.response && error.response.status))) || 0;
}

function checkListBody(body) {
  if (!body || typeof body !== "object" || body.success === false) {
    var notFound = body && Number(body.status_code) === 34;
    var error = new Error(notFound ? "榜单不存在或需要 TMDB v4 接口" : "TMDB 请求失败，请检查网络和 TMDB 配置");
    error.status = notFound ? 404 : 0;
    throw error;
  }
  if (!Array.isArray(body.results) && !Array.isArray(body.items)) throw new Error("TMDB 返回格式异常，缺少影视列表");
  return body;
}

async function httpList(version, listId, query) {
  var response;
  try {
    response = await Widget.http.get("https://api.themoviedb.org/" + version + "/list/" + listId, {params: query});
  } catch (original) {
    var requestError = new Error("TMDB 网络请求失败，请检查网络和 API Key");
    requestError.status = responseStatus(original);
    throw requestError;
  }
  if (!response) throw new Error("TMDB 返回空响应");
  if (Number(response.status) >= 400) {
    var statusError = new Error("TMDB 请求失败（HTTP " + Number(response.status) + "），请检查 API Key 与榜单权限");
    statusError.status = Number(response.status);
    throw statusError;
  }
  var body = response.data;
  if (typeof body === "string") {
    try { body = JSON.parse(body); }
    catch (_) { throw new Error("TMDB 返回的内容不是有效 JSON"); }
  }
  return checkListBody(body);
}

async function fetchList(listId, params, page) {
  var query = {language: params.language || "zh-CN", page: page};
  var key = typeof params.apiKey === "string" ? params.apiKey.trim() : "";
  if (key) {
    query.api_key = key;
    try { return await httpList(3, listId, query); }
    catch (error) {
      if (responseStatus(error) !== 404) throw error;
      return await httpList(4, listId, query);
    }
  }
  if (!Widget.tmdb || typeof Widget.tmdb.get !== "function") throw new Error("此 rex 版本没有内置 TMDB 接口，请填写 TMDB API Key");
  try {
    return checkListBody(await Widget.tmdb.get("list/" + listId, {params: query}));
  } catch (error) {
    if (responseStatus(error) === 404) throw new Error("该榜单需要 v4 接口或已被移除；请填写自己的 TMDB API Key 后重试");
    throw new Error("TMDB 榜单读取失败，请检查 rex 的 TMDB 配置和网络，或填写自己的 API Key");
  }
}

function toVideoItem(item, defaultType) {
  if (!item || typeof item !== "object") return null;
  var mediaType = item.media_type || defaultType;
  var id = Number(item.id);
  if ((mediaType !== "movie" && mediaType !== "tv") || !Number.isSafeInteger(id) || id < 1) return null;
  return {
    id: id,
    type: "tmdb",
    mediaType: mediaType,
    title: item.title || item.name || item.original_title || item.original_name || String(id),
    description: item.overview || "",
    posterPath: item.poster_path || "",
    backdropPath: item.backdrop_path || "",
    coverUrl: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : (item.backdrop_path ? "https://image.tmdb.org/t/p/w780" + item.backdrop_path : ""),
    releaseDate: item.release_date || item.first_air_date || "",
    rating: typeof item.vote_average === "number" ? item.vote_average : 0
  };
}

function listRows(body) {
  return Array.isArray(body.results) ? body.results : body.items;
}

async function readSelectedList(selected, params) {
  var mode = params.mode || "all";
  if (mode !== "all" && mode !== "paged") throw new Error("无效的加载模式");
  var page = listPage(params.page);
  // A complete response is emitted once; do not repeat it on later scroll pages.
  if (mode === "all" && page > 1) return [];
  var body = await fetchList(selected.id, params, mode === "all" ? 1 : page);
  var items = listRows(body);
  var hasPages = body.total_pages !== undefined && body.total_pages !== null;
  var remotePages = Number(body.total_pages);
  if (hasPages && (!Number.isSafeInteger(remotePages) || remotePages < 0)) throw new Error("TMDB 返回的总页数无效");
  if (mode === "paged") {
    if (hasPages) {
      if (page > remotePages) return [];
    } else {
      items = items.slice((page - 1) * 20, page * 20);
    }
  } else if (hasPages && remotePages > 1) {
    if (remotePages > 500) throw new Error("榜单超过完整加载上限，请选择分页加载；未返回截断榜单");
    if (!items.length) throw new Error("榜单首页异常为空，请刷新重试");
    items = items.slice();
    // Bounded batches preserve the source order without flooding TMDB.
    for (var next = 2; next <= remotePages; next += 3) {
      var requests = [];
      for (var current = next; current <= Math.min(next + 2, remotePages); current++) {
        requests.push(fetchList(selected.id, params, current));
      }
      var pages = await Promise.all(requests);
      for (var index = 0; index < pages.length; index++) {
        var rows = listRows(pages[index]);
        if (!rows.length) throw new Error("榜单分页异常为空，无法确认完整性，请刷新重试");
        items = items.concat(rows);
      }
    }
  }
  return items.map(function (item) { return toVideoItem(item, selected.mediaType); }).filter(function (item) { return item !== null; });
}

async function loadRankings(params = {}) {
  try { return await readSelectedList(selectRanking(params), params); }
  catch (error) { console.error("[public-lists/loadRankings] " + error.message); throw error; }
}

async function loadDoubanMovies(params = {}) {
  try { return await readSelectedList(selectCategory("doubanMovies", params), params); }
  catch (error) { console.error("[public-lists/loadDoubanMovies] " + error.message); throw error; }
}

async function loadDoubanTV(params = {}) {
  try { return await readSelectedList(selectCategory("doubanTV", params), params); }
  catch (error) { console.error("[public-lists/loadDoubanTV] " + error.message); throw error; }
}
