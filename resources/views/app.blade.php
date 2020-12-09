<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="{{ asset('css/app.css') }}?v={{ time() }}" rel="stylesheet">
    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>
<body class="bg-green-800">
@inertia
</body>
</html>
