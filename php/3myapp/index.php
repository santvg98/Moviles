<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();
function getDB(){
    $dbhost = "localhost";
    $dbname = "3myapp";
    $dbuser = "santiago";
    $dbpass = "280403";
    $mysql_conn_string = "mysql:host=$dbhost;dbname=$dbname";
    $dbConnection = new PDO($mysql_conn_string, $dbuser, $dbpass);
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbConnection;
}

$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write("404 no found");
    return $response;
});
$app->get('/consultaSupervisor', function ($request, $response, $args) {  
    try{
        $db =  getDB(); 
        $sth = $db->prepare("SELECT * from supervisor ");
        $sth->execute(); 
        $test = $sth->fetchAll(PDO::FETCH_ASSOC);
    
        if($test){
            $response->getBody()->write(json_encode($test)); 
            $db = null;
        }
        else{
            $response->getBody()->write('{"error":"error"}');
        }
    }catch(PDOException $e){
            $response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); 
        }
    return $response
        ->withHeader('Content-Type', 'application/json');
    });
$app->get('/consultaCajeros', function ($request, $response, $args) {  
        try{
            $db =  getDB(); 
            $sth = $db->prepare("SELECT * from cajero ");
            $sth->execute(); 
            $test = $sth->fetchAll(PDO::FETCH_ASSOC);
        
            if($test){
                $response->getBody()->write(json_encode($test)); 
                $db = null;
            }
            else{
                $response->getBody()->write('{"error":"error"}');
            }
        }catch(PDOException $e){
                $response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); 
            }
        return $response
            ->withHeader('Content-Type', 'application/json');
        });
$app->get('/consultaVigilante', function ($request, $response, $args) {  
            try{
                $db =  getDB(); 
                $sth = $db->prepare("SELECT * from vigilante ");
                $sth->execute(); 
                $test = $sth->fetchAll(PDO::FETCH_ASSOC);
            
                if($test){
                    $response->getBody()->write(json_encode($test)); 
                    $db = null;
                }
                else{
                    $response->getBody()->write('{"error":"error"}');
                }
            }catch(PDOException $e){
                    $response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); 
                }
            return $response
                ->withHeader('Content-Type', 'application/json');
            });

$app->run();
