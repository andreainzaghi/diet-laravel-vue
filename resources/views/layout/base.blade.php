<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
        <title>Laravel</title>
           
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
       
    </head>
    <body>
        <header>
            <img src="{{asset('img/llogoo.png')}}" alt="">
        </header>
        <main>
            @yield('corpo')
        </main>
       
  <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
  <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
