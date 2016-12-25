// this file is to be  able to run webpack command without giving the source and distination js files  and  to add modules to be able to run webpack on JSX files
module.exports={
  entry:'./app/app.jsx', // this specify the code i am going to run webpack on
  output:{ // this is the info about the output file
    path:__dirname,   // this specify the current directory
    filename: './public/bundle.js'
  },
  resolve:{
    root:__dirname,// this specify the current directory
    alias:{// this to be able to use the alias instate of the full path in require
      Main:'app/components/Main.jsx',
      Nav:'app/components/Nav.jsx',
      Weather:'app/components/Weather.jsx',
      About:'app/components/About.jsx',
      Examples:'app/components/Examples.jsx',
      WeatherForm:'app/components/WeatherForm.jsx',
      WeatherMessage:'app/components/WeatherMessage.jsx'




    },
    extensions:['','.js','.jsx'] // list of extentions i am going to process
  },
  module:{ //i want here to add the loader to enable JSX
    loaders: [// the loader attribute is an array of objects
      {
        // the only loader  we going to download is the babel loader
        // we say take our files parse them with react and read the output with ES2015
        loader:'babel-loader',
        query:{
          presets:['react','es2015']
        },
        test: /\.jsx?$/,  // make al regx to specify the files i want to parse
        exclude:/(node_modules|bower_components)/  // don't parse these files
      }
    ]
  }
}
