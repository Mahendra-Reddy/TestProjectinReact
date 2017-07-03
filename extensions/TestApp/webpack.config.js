module.exports = {
    entry: {
        app: "./home.jsx",
    },
    output: {
        path: "./build",
        filename: "./app.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
           loaders: ["babel"]
        },{
            test: /\.css$/,
            loader: "style/useable!css"
        },{
            test: /\.scss$/,
            loader: "style/useable!css!sass"
        },{
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.jpg($|\?)|\.png($|\?)|\.gif($|\?)/,
            loader: 'url-loader'
        },{
            test: /\.html$/,
            loader: "file?name=[name].[ext]",
        }],
    },
    modulesDirectories: ["node_modules", "bower_components"],
   resolve: {
        extensions: ['', '.js', '.json', '.jsx'],
    }
};