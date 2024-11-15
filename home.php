<?php
$description = 'Full-stack developer with a couple fun side-projects';

$websites = [
    'novogamer.com'    => 'https://icons.duckduckgo.com/ip3/novogamer.com.ico',
    'annoyingbeep.com' => 'https://icons.duckduckgo.com/ip3/annoyingbeep.com.ico',
    'seotoolkit.dev'   => 'https://icons.duckduckgo.com/ip3/seotoolkit.dev.ico',
    'browser.is'       => 'https://icons.duckduckgo.com/ip3/browser.is.ico',
];
?>

<!doctype html>
<html class="no-js h-full flex flex-1" lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>mason</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/app.css?v=2">

    <script defer src="https://api.pirsch.io/pa.js" id="pianjs" data-code="eS7tDC6VGNOnoaRSEiR8RsgGFgHpfvkk"></script>

    <meta name="description" content="<?= $description ?>">
    <meta property="og:title" content="masondoes.dev">
    <meta property="og:url" content="https://masondoes.dev">
    <meta property="og:image" content="https://masondoes.dev/img/og.png">
    <meta property="og:description" content="<?= $description ?>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@capten_masin">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <meta name="theme-color" content="#E7E5E4">

    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mason Day",
            "alternateName": "capten_masin",
            "jobTitle": "Web Developer",
            "url": "https://masondoes.dev",
            "sameAs": [
                "https://x.com/capten_masin",
                "https://github.com/captenmasin"
            ],
            "image": "https://masondoes.dev/img/og.png",
            "description": "<?= $description ?>",
            "knowsAbout": [
                "Web Development",
                "HTML",
                "CSS",
                "JavaScript",
                "Vue",
                "PHP",
                "Laravel"
            ],
        }
    </script>
</head>

<body class="h-full flex flex-1 bg-gradient-to-b from-[#FAFAF9] to-[#E7E5E4]">
<div class="flex flex-col gap-1 items-center justify-center w-full h-full">
    <h1 class="font-heading leading-0 -mt-8 text-primary text-9xl">mason</h1>
    <h2 class="font-heading text-5xl">
        full-stack developer
    </h2>
    <ul class="flex items-center flex-wrap justify-center gap-2 mt-8">
        <?php foreach ($websites as $website => $favicon): ?>
            <li>
                <a href="https://<?= $website ?>" target="_blank" class="text-black flex items-center gap-1.5 hover:text-primary transition-colors hover:bg-black/5 px-4 py-1 rounded-lg">
                    <div class="w-6 aspect-square flex items-center bg-primary/5 justify-center p-1.5 rounded-full">
                        <img class="w-full" width="12" height="12" alt="Favicon for <?= $website ?>" src="<?= $favicon ?>"/>
                    </div>
                    <span class="mt-[-2px]"><?= $website ?></span>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
    <ul class="mt-4 flex items-center justify-center gap-4">
        <li>
            <a href="https://x.com/capten_masin" target="_blank">
                <span class="sr-only">X/Twitter profile</span>
                <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://github.com/capten_masin" target="_blank">
                <span class="sr-only">Github profile</span>
                <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
            </a>
        </li>
    </ul>
</div>
</body>

</html>
