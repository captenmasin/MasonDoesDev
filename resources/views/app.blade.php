<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="{{ asset('css/app.css') }}?v={{ time() }}" rel="stylesheet">
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <meta property="og:url" content="{{ request()->url() }}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="{{ config('app.name') }}"/>
    <meta property="og:description" content="A random guy who makes things"/>
    <meta property="og:image" content="{{ config('app.url') }}/img/lou-and-mas.jpg"/>
</head>
<body class="bg-green-800">
@inertia
</body>
</html>
