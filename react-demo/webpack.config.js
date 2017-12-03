var debug = process.env.NODE_ENV !== "production";
var config = {
    entry: './client/main.js',           //Start the project from here
    output:{
       devtoolLineToLine: { test: /\.js$/, include: '/components/' },
       filename: 'bundle.js'                 //Where to bundle and keep it
    },
    devServer: {                            //Webserver details
        inline: true,
        port: 8080
    },
    module: {   
        //modules and loaders required to build.
        loaders:[
            {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            
            query: {
                presets: ['es2015','react']    //Convert to ECMA script 5
            }

            }
        ]
    }                    
}
module.exports = config;